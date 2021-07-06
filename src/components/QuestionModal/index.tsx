import React from "react";

import Question from "components/Question";

import styles from "./styles.module.scss";
import Button from "components/Button";
import useQuiz from "store/useQuiz";

const QuestionModal = () => {
  const { goToNextQuestion, selectedAnswer, isSubmitted, submitAnswer } =
    useQuiz();

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
