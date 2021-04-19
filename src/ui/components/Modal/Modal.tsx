import React, { useContext } from "react";
import { QuestionContext } from "ui/contexts/QuestionsContext";
import { QuestionModal } from "./QuestionModal";

export const Modal = () => {
  const { hasSessionFinished } = useContext(QuestionContext);
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-2">COUNTRY QUIZ</h1>
      <div className="w-116 bg-white rounded-lg px-8 py-14 ">
        {!hasSessionFinished && <QuestionModal />}
      </div>
    </div>
  );
};
