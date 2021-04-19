import React, { useContext } from "react";
import { Question } from "types/question";
import { QuestionContext } from "ui/contexts/QuestionsContext";

interface CurrentQuestionProps {
  question: Question;
}

const letters = ["A", "B", "C", "D"];

export const CurrentQuestion = (props: CurrentQuestionProps) => {
  const { selectedAnswer, setSelectedAnswer, isSubmited } = useContext(
    QuestionContext
  );
  const { correctAnswer } = props.question;

  return (
    <div>
      {props.question.flagSrc && (
        <img src={props.question.flagSrc} alt={props.question.correctAnswer} />
      )}

      <h2 className="text-2xl font-bold text-dark-blue mb-8">
        {props.question.title}
      </h2>

      <div className="space-y-4">
        {props.question.possibleAnswers.map((possibleAnswer, index) => (
          <button
            key={possibleAnswer}
            className={`flex px-4 py-3 bg-transparent w-full border text-gray-500 rounded-xl text-xl space-x-4 font-medium hover:bg-mustard hover:border-transparent hover:text-white transition ${
              selectedAnswer === possibleAnswer
                ? "bg-mustard  text-white"
                : "border-gray-500"
            } ${
              isSubmited && possibleAnswer === correctAnswer
                ? "bg-green-500 text-white"
                : ""
            }${
              isSubmited &&
              possibleAnswer !== correctAnswer &&
              selectedAnswer === possibleAnswer
                ? "bg-red-500"
                : ""
            }
            `}
            type="button"
            disabled={isSubmited}
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
