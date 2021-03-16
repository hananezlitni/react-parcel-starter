import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Created by{" "}
      <a className={styles.link} href="https://www.hananezlitni.com/">
        Hanane Zlitni
      </a>
    </footer>
  );
};

export default Footer;
