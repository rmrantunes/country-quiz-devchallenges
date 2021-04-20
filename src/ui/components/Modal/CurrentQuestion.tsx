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

  function selectedAnswerClasses(option: string) {
    return selectedAnswer === option
      ? "bg-mustard border-transparent text-white"
      : "border-gray-500";
  }

  function correctAnswerClasses(option: string) {
    return isSubmitted && option === correctAnswer
      ? "bg-green-500 border-transparent text-white"
      : "";
  }

  function wrongAnswerClasses(option: string) {
    return isSubmitted && selectedAnswer === option && option !== correctAnswer
      ? "bg-red-500 border-transparent"
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
        {currentQuestion.options.map((option, index) => (
          <button
            key={option}
            className={`flex px-4 py-3 bg-transparent w-full border text-gray-500 rounded-xl text-xl space-x-4 font-medium hover:bg-mustard hover:border-transparent hover:text-white transition 
            ${selectedAnswerClasses(option)} 
            ${correctAnswerClasses(option)}
            ${wrongAnswerClasses(option)}
            `.replace(/\s+/g, " ")}
            type="button"
            disabled={isSubmitted}
            onClick={() => setSelectedAnswer(option)}
          >
            <span>{letters[index]}</span>
            <span className="flex-1 text-left">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
