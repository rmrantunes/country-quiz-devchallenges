import React from "react";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span>Made by </span>
        <a href="https://github.com/rmrantunes"> @rmrantunes</a>
      </div>
    </footer>
  );
};

export default Footer;
