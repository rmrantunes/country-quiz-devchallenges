import Button from "ui/components/Button";
import styles from "./styles.module.scss";

type StatsModalProps = {
  correctAnswers: number;
  onRestart: () => void;
};

const StatsModal = (props: StatsModalProps) => {
  return (
    <div className={styles.stats}>
      <strong>Your score: {props.correctAnswers}/10</strong>
      <Button onClick={props.onRestart}>Play again</Button>
    </div>
  );
};

export default StatsModal;
