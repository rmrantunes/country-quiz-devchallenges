import React, { useContext, useState } from "react";
import { QuestionContext } from "ui/contexts/QuestionsContext";
import { CurrentQuestion } from "./CurrentQuestion";

export const QuestionModal = () => {
  const {
    goToNextQuestion,
    selectedAnswer,
    isSubmitted,
    submitAnswer,
  } = useContext(QuestionContext);
  return (
    <div className="space-y-8">
      <CurrentQuestion />
      <div className="grid grid-cols-2 h-12">
        {!isSubmitted ? (
          <button
            onClick={submitAnswer}
            disabled={!selectedAnswer}
            className={`col-start-2 rounded-lg text-white ${
              selectedAnswer ? "bg-mustard" : "bg-gray-500 cursor-not-allowed"
            }`}
          >
            Submit answer
          </button>
        ) : (
          <button
            onClick={goToNextQuestion}
            className="col-start-2 bg-mustard rounded-lg text-white"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
