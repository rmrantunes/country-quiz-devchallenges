import React from "react";
import clsx from "classnames";


import styles from "./styles.module.scss";
import useQuiz from "store/useQuiz";

const letters = ["A", "B", "C", "D"];

const Question = () => {
  const { selectedAnswer, setSelectedAnswer, isSubmitted, currentQuestion } =
    useQuiz()

  const { correctAnswer } = currentQuestion;

  return (
    <div className={styles.question}>
      {currentQuestion.flagSrc && (
        <img
          src={currentQuestion.flagSrc}
          alt={currentQuestion.correctAnswer}
        />
      )}

      <h2 className="text-2xl font-bold text-dark-blue mb-8">
        {currentQuestion.title}
      </h2>

      <div className={styles.options}>
        {currentQuestion.options.map((option, index) => (
          <button
            key={option}
            className={clsx(styles.option, {
              [styles.isSelected]: selectedAnswer === option,
              [styles.isWrong]:
                isSubmitted &&
                selectedAnswer === option &&
                option !== correctAnswer,
              [styles.isCorrect]: isSubmitted && option === correctAnswer,
            })}
            type="button"
            disabled={isSubmitted}
            onClick={() => setSelectedAnswer(option)}
          >
            <span>{letters[index]}</span>
            <span className="option-value">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
