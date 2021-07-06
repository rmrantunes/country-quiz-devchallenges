import React from "react";

import styles from "./styles.module.scss";

const Center: React.FC = (props) => {
  return <div className={styles.center}>{props.children}</div>;
};

export default Center;
