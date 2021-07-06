import React from "react";

import styles from "./styles.module.scss";

type ProgressProps = {
  /** 0 to 100 */
  percentage: number;
};

const Progress = (props: ProgressProps) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.progress}
        style={{ width: props.percentage + "%" }}
      />
    </div>
  );
};

export default Progress;
