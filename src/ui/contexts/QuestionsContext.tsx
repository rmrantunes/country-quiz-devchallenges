import React, { createContext, useState } from "react";
import { Question } from "types/question";

interface QuestionContextValue {
  currentQuestion: Question;
  goToNextQuestion(): void;
  isSubmitted: boolean;
  selectedAnswer: string;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
  usersChoicesLog: boolean[];
  submitAnswer(): void;
}

export const QuestionContext = createContext({} as QuestionContextValue);

export const QuestionsProvider: React.FC<{ questions: Question[] }> = (
  props
) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions] = useState(props.questions);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [usersChoicesLog, setusersChoicesLog] = useState<boolean[]>([]);

  const currentQuestion = questions[questionIndex];

  function goToNextQuestion() {
    setIsSubmitted(false);
    setSelectedAnswer("");
    setQuestionIndex((state) => state + 1);
  }

  function submitAnswer() {
    if (!selectedAnswer) return;
    const isAnswerCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setusersChoicesLog((state) => [...state, isAnswerCorrect]);
    setIsSubmitted(true);
  }

  return (
    <QuestionContext.Provider
      value={{
        currentQuestion,
        goToNextQuestion,
        isSubmitted,
        usersChoicesLog,
        selectedAnswer,
        setSelectedAnswer,
        submitAnswer,
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
