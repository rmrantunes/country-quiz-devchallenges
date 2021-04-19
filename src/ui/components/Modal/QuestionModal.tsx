import React, { useContext, useState } from "react";
import { QuestionContext } from "ui/contexts/QuestionsContext";
import { CurrentQuestion } from "./CurrentQuestion";

export const QuestionModal = () => {
  const {
    currentQuestion,
    goToNextQuestion,
    isSubmitted,
    submitAnswer,
  } = useContext(QuestionContext);
  return (
    <div className="space-y-8">
      <CurrentQuestion question={currentQuestion} />
      <div className="flex justify-end">
        {!isSubmitted ? (
          <button onClick={submitAnswer}>Submit answer</button>
        ) : (
          <button onClick={goToNextQuestion}>Next</button>
        )}
      </div>
    </div>
  );
};
