import React from "react";
import QuestionModal from "components/QuestionModal";
import StatsModal from "components/StatsModal";

import styles from "./styles.module.scss";
import Progress from "../Progress";
import useQuiz from "store/useQuiz";

export const Modal = () => {
  const {
    hasSessionFinished,
    startNewSession,
    getProgress,
    getCorrectAnswersAmount,
  } = useQuiz();

  const progressPercentage = hasSessionFinished
    ? (getCorrectAnswersAmount() / 10) * 100
    : getProgress();

  return (
    <div className={styles.wrapper}>
      <h1>COUNTRY QUIZ</h1>
      <div className={styles.modal}>
        <Progress percentage={progressPercentage} />
        {!hasSessionFinished && <QuestionModal />}
        {hasSessionFinished && (
          <StatsModal
            onRestart={startNewSession}
            correctAnswers={getCorrectAnswersAmount()}
          />
        )}
      </div>
    </div>
  );
};
