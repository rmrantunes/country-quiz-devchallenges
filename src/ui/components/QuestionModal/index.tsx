import React, { useContext, useState } from "react";
import { QuestionsContext } from "ui/contexts/QuestionsContext";
import Question from "ui/components/Question";

import styles from "./styles.module.scss";

const QuestionModal = () => {
  const { goToNextQuestion, selectedAnswer, isSubmitted, submitAnswer } =
    useContext(QuestionsContext);
  return (
    <div className={styles.questionModal}>
      <Question />
      <div className={styles.footer}>
        {!isSubmitted ? (
          <button onClick={submitAnswer} disabled={!selectedAnswer}>
            Submit answer
          </button>
        ) : (
          <button onClick={goToNextQuestion}>Next</button>
        )}
      </div>
    </div>
  );
};

export default QuestionModal;
