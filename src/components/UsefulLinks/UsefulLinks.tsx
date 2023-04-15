import React from "react";
import { Button } from "../Button/Button";
import classnames from "classnames";
import * as css from "../Button/styles.module.css";
import * as styles from "./styles.module.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandPointRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "gatsby";

export const UsefulLinks = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Полезные ссылки:</h2>
      <div className={styles.group}>
        <Link
          to={`/payment`}
          state={{ mode: "payment" }}
          title="Доставка"
          className={classnames(
            styles.button,
            css.button,
            css.button_secondary
          )}
        >
          <CiDeliveryTruck />
          Доставка
        </Link>
        <Link
          to={`/promotion`}
          state={{ mode: "promotion" }}
          title="Акция"
          className={classnames(
            styles.button,
            css.button,
            css.button_secondary
          )}
        >
          <FaHandPointRight />
          Акция
        </Link>
        <Link
          to={`/catalog`}
          state={{ mode: "catalog" }}
          title="Каталог"
          className={classnames(
            styles.button,
            css.button,
            css.button_secondary
          )}
        >
          <GiHamburgerMenu />
          Каталог
        </Link>
        <Link
          to={`/blog`}
          state={{ mode: "blog" }}
          title="Блог"
          className={classnames(
            styles.button,
            css.button,
            css.button_secondary
          )}
        >
          <HiUserGroup />
          Блог
        </Link>
      </div>
    </div>
  );
};
