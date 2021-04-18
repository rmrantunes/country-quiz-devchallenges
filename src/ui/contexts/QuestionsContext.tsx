import React, { createContext, useState } from "react";
import { Question } from "types/question";

interface QuestionContextValue {
  currentQuestion: Question;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const QuestionContext = createContext({} as QuestionContextValue);

export const QuestionsProvider: React.FC<{ questions: Question[] }> = (
  props
) => {
  const [questionIndex, setQuestionIndex] = useState(1);
  const [questions] = useState(props.questions);
  const currentQuestion = questions[questionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState("");

  return (
    <QuestionContext.Provider value={{ currentQuestion, setQuestionIndex }}>
      {props.children}
    </QuestionContext.Provider>
  );
};
