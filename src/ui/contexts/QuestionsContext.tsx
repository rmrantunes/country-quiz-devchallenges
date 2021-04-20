import React, { createContext, useState } from "react";
import { Question } from "types/question";

interface QuestionsContextValue {
  currentQuestion: Question;
  goToNextQuestion(): void;
  isSubmitted: boolean;
  selectedAnswer: string;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
  userAnswersLog: boolean[];
  submitAnswer(): void;
  hasSessionFinished: boolean;
}

export const QuestionsContext = createContext({} as QuestionsContextValue);

export const QuestionsProvider: React.FC<{ questions: Question[] }> = (
  props
) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions] = useState(props.questions);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [userAnswersLog, setuserAnswersLog] = useState<boolean[]>([]);
  const [hasSessionFinished, setHasSessionFinished] = useState(false);

  const currentQuestion = questions[questionIndex];
  const isThereAnyQuestionAhead = questions[questionIndex + 1] !== undefined;

  function goToNextQuestion() {
    setIsSubmitted(false);
    setSelectedAnswer("");
    if (isThereAnyQuestionAhead) {
      setQuestionIndex((state) => state + 1);
      return;
    }
    setHasSessionFinished(true);
  }

  function submitAnswer() {
    if (!selectedAnswer) return;
    const { correctAnswer } = currentQuestion;
    const isSelectedAnswerCorrect = selectedAnswer === correctAnswer;
    setuserAnswersLog((state) => [...state, isSelectedAnswerCorrect]);
    setIsSubmitted(true);
  }

  return (
    <QuestionsContext.Provider
      value={{
        currentQuestion,
        goToNextQuestion,
        isSubmitted,
        userAnswersLog,
        selectedAnswer,
        setSelectedAnswer,
        submitAnswer,
        hasSessionFinished,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  );
};
