import React from "react";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <h1>
        Hello, World!{" "}
        <span role="img" aria-label="Sparkle emoji">
          ✨
        </span>
      </h1>
      <p>Welcome!</p>
    </main>
  );
};

export default Main;
