import React from "react";
// import styles from "./styles.module.css";
import * as styles from "./styles.module.css";

export const About = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Немного о себе:</h2>
      <div className={styles.text}>
        Меня зовут Антон и я веб-дизайнер. Этот сайт является моей разработкой.
        Он создан для презентации и не является коммерческим. Если у Вас
        возникли вопросы и предложения, вы можете написать мне на{" "}
        <a style={{ color: "#c50067" }} href="mailto:timofeevai1980@gmail.com">
          почту.
        </a>
      </div>
    </div>
  );
};
