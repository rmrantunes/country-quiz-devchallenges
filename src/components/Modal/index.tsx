import React, { useContext } from "react";
import { QuestionsContext } from "contexts/QuestionsContext";
import QuestionModal from "components/QuestionModal";
import StatsModal from "components/StatsModal";

import styles from "./styles.module.scss";
import Progress from "../Progress";

export const Modal = () => {
  const { hasSessionFinished, userAnswersLog, startNewSession, questionIndex } =
    useContext(QuestionsContext);

  const progressPercentage = hasSessionFinished
    ? (userAnswersLog.filter(Boolean).length / 10) * 100
    : (questionIndex / 10) * 100;

  return (
    <div className={styles.wrapper}>
      <h1>COUNTRY QUIZ</h1>
      <div className={styles.modal}>
        <Progress percentage={progressPercentage} />
        {!hasSessionFinished && <QuestionModal />}
        {hasSessionFinished && (
          <StatsModal
            onRestart={startNewSession}
            correctAnswers={userAnswersLog.filter(Boolean).length}
          />
        )}
      </div>
    </div>
  );
};
