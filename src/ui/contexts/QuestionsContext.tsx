import React, { createContext, useState } from "react";
import { Question } from "types/question";

interface QuestionContextValue {
  currentQuestion: Question;
  goToNextQuestion(): void;
  isSubmited: boolean;
  selectedAnswer: string;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
  submitAnswer(): void;
}

export const QuestionContext = createContext({} as QuestionContextValue);

export const QuestionsProvider: React.FC<{ questions: Question[] }> = (
  props
) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions] = useState(props.questions);
  const [isSubmited, setIsSubmited] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState<Question[]>([]);

  const currentQuestion = questions[questionIndex];

  function goToNextQuestion() {
    setIsSubmited(false);
    setSelectedAnswer("");
    setQuestionIndex((state) => state + 1);
  }

  function submitAnswer() {
    if (!selectedAnswer) return;
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswers((state) => [...state, currentQuestion]);
    }
    setIsSubmited(true);
  }

  return (
    <QuestionContext.Provider
      value={{
        currentQuestion,
        goToNextQuestion,
        isSubmited,
        selectedAnswer,
        setSelectedAnswer,
        submitAnswer,
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
