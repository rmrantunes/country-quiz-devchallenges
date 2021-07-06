import React, { useContext } from "react";
import { QuestionsContext } from "ui/contexts/QuestionsContext";
import QuestionModal from "ui/components/QuestionModal";

import styles from "./styles.module.scss";

export const Modal = () => {
  const { hasSessionFinished, userAnswersLog, startNewSession } =
    useContext(QuestionsContext);
  return (
    <div className={styles.wrapper}>
      <h1>COUNTRY QUIZ</h1>
      <div className={styles.modal}>
        {!hasSessionFinished && <QuestionModal />}
        {hasSessionFinished && (
          <div>
            <strong>
              You score {userAnswersLog.filter(Boolean).length}/10
            </strong>
            <button onClick={startNewSession}>Jogar novamente</button>
          </div>
        )}
      </div>
    </div>
  );
};
