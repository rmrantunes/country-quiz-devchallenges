import React from "react";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span>
          Made by <a href="https://github.com/rmrantunes"> @rmrantunes</a> using{" "}
          <a href="https://www.npmjs.com/package/country-quiz-generator">
            country-quiz-generator
          </a>{" "}
          package
        </span>
      </div>
    </footer>
  );
};

export default Footer;
