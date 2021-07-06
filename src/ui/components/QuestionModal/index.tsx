import React, { useContext, useState } from "react";
import { QuestionsContext } from "ui/contexts/QuestionsContext";
import Question from "ui/components/Question";

import styles from "./styles.module.scss";
import Button from "ui/components/Button";

const QuestionModal = () => {
  const { goToNextQuestion, selectedAnswer, isSubmitted, submitAnswer } =
    useContext(QuestionsContext);
  return (
    <div className={styles.questionModal}>
      <Question />
      <div className={styles.footer}>
        {!isSubmitted ? (
          <Button onClick={submitAnswer} disabled={!selectedAnswer}>
            Submit answer
          </Button>
        ) : (
          <Button onClick={goToNextQuestion}>Next</Button>
        )}
      </div>
    </div>
  );
};

export default QuestionModal;
