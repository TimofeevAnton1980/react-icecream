import React from "react";
// import styles from './styles.module.css'
import * as styles from "./styles.module.css";
import { Link } from "gatsby";

export const Additionally = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Дополнительно:</h2>
      <div className={styles.group}>
        <Link to={`/`} title="Для поставщиков" className={styles.button}>
          Для поставщиков
        </Link>
        <Link to={`/`} title="Наши документы" className={styles.button}>
          Наши документы
        </Link>
        <Link to={`/`} title="О производстве" className={styles.button}>
          О производстве
        </Link>
        <Link
          to={`/`}
          title="Экологические стандарты"
          className={styles.button}
        >
          Экологические стандарты
        </Link>
      </div>
    </div>
  );
};
