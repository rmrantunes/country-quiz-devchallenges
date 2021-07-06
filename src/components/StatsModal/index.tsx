import Button from "components/Button";
import styles from "./styles.module.scss";

type StatsModalProps = {
  correctAnswers: number;
  onRestart: () => void;
};

const StatsModal = (props: StatsModalProps) => {
  return (
    <div className={styles.stats}>
      <strong>Your score: {props.correctAnswers}/10</strong>
      {props.correctAnswers >= 7 && (
        <img src="/images/undraw_winners_ao2o 2.svg" alt="Nice game!" />
      )}
      <Button onClick={props.onRestart}>Play again</Button>
    </div>
  );
};

export default StatsModal;
