import React, { useContext } from "react";
import { QuestionContext } from "ui/contexts/QuestionsContext";

const letters = ["A", "B", "C", "D"];

export const CurrentQuestion = () => {
  const {
    selectedAnswer,
    setSelectedAnswer,
    isSubmitted,
    currentQuestion,
  } = useContext(QuestionContext);
  const { correctAnswer } = currentQuestion;

  function selectedAnswerClasses(possibleAnswer: string) {
    return selectedAnswer === possibleAnswer
      ? "bg-mustard  text-white"
      : "border-gray-500";
  }

  function correctAnswerClasses(possibleAnswer: string) {
    return isSubmitted && possibleAnswer === correctAnswer
      ? "bg-green-500 text-white"
      : "";
  }

  function wrongAnswerClasses(possibleAnswer: string) {
    return isSubmitted &&
      possibleAnswer !== correctAnswer &&
      selectedAnswer === possibleAnswer
      ? "bg-red-500"
      : "";
  }

  return (
    <div>
      {currentQuestion.flagSrc && (
        <img
          src={currentQuestion.flagSrc}
          alt={currentQuestion.correctAnswer}
        />
      )}

      <h2 className="text-2xl font-bold text-dark-blue mb-8">
        {currentQuestion.title}
      </h2>

      <div className="space-y-4">
        {currentQuestion.possibleAnswers.map((possibleAnswer, index) => (
          <button
            key={possibleAnswer}
            className={`flex px-4 py-3 bg-transparent w-full border text-gray-500 rounded-xl text-xl space-x-4 font-medium hover:bg-mustard hover:border-transparent hover:text-white transition 
            ${selectedAnswerClasses(possibleAnswer)} 
            ${correctAnswerClasses(possibleAnswer)}
            ${wrongAnswerClasses(possibleAnswer)}
            `}
            type="button"
            disabled={isSubmitted}
            onClick={() => setSelectedAnswer(possibleAnswer)}
          >
            <span>{letters[index]}</span>
            <span className="flex-1 text-left">{possibleAnswer}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
