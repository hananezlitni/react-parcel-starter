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
      <p>
        Check out the{" "}
        <a href="https://github.com/hananezlitni/react-parcel-starter">
          repository
        </a>{" "}
        to get started.
      </p>
    </main>
  );
};

export default Main;
