// import styles from './styles.module.css';
import * as styles from "./styles.module.css";
import React from "react";
import { UsefulLinks } from "../UsefulLinks/UsefulLinks";
import { Additionally } from "../Additionally/Additionally";
import { About } from "../About/About";
import BtnScrollUp from "../BtnScrollUp/BtnScrollUp";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <UsefulLinks />
        <Additionally />
        <About />
      </div>
      <div className={styles.under}>
        <div className={styles.text}>Powered by React</div>
        <div>Copyright © 2022 - {new Date().getFullYear()} Timofeev A.I.</div>
        <BtnScrollUp />
      </div>
    </footer>
  );
};
