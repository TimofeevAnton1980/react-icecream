import * as styles from "./styles.module.css";
import classnames from "classnames";
import { FaChevronDown } from "react-icons/fa";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "gatsby";

export const Menu = () => {
  return (
    <div className={classnames(styles.menu_wrapper)}>
      <nav>
        <ul>
          <li className={styles.dropdown}>
            <Link
              to="/"
              // className={classnames(styles.active)}
              state={{ mode: "home" }}
            >
              <div className={classnames(styles.menu_home)}>
                <span className={classnames(styles.menu_el)}>
                  <AiFillHome className={classnames(styles.menu_el__home)} />
                </span>
                <div className={classnames(styles.menu_el__text)}>
                  <span>Домой</span>
                </div>
              </div>
            </Link>
          </li>
          <li className={styles.dropdown}>
            <a href="#">
              <div className={classnames(styles.menu_home)}>
                <div className={classnames(styles.menu_el__text)}>
                  <span>Каталог</span>
                </div>
                <span className={classnames(styles.menu_el)}>
                  <FaChevronDown className={classnames(styles.menu_el__home)} />
                </span>
              </div>
            </a>

            <ul className={styles.dropdown_menu}>
              <li>
                <Link to="/catalog" state={{ mode: "catalog" }}>
                  Сливочное
                </Link>
              </li>
              <li>
                <Link to="/catalog" state={{ mode: "catalog" }}>
                  Щербеты
                </Link>
              </li>
              <li>
                <Link to="/catalog" state={{ mode: "catalog" }}>
                  Фруктовый лед
                </Link>
              </li>
              <li>
                <Link to="/catalog" state={{ mode: "catalog" }}>
                  Мелорин
                </Link>
              </li>
            </ul>
          </li>

          <li className={styles.dropdown}>
            <Link to="/promotion" state={{ mode: "promotion" }}>
              Акция
            </Link>
          </li>

          <li className={styles.dropdown}>
            <Link to="/blog" state={{ mode: "blog" }}>
              Блог
            </Link>
          </li>

          <li className={styles.dropdown}>
            <Link to="/payment" state={{ mode: "payment" }}>
              Доставка и оплата
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
