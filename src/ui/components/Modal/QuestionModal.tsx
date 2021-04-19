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
      <div className="grid grid-cols-2 h-12">
        {!isSubmitted ? (
          <button
            onClick={submitAnswer}
            className="col-start-2 bg-mustard rounded-lg text-white"
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
