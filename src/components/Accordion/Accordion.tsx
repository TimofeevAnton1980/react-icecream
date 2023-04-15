import React from "react";
import * as styles from "./styles.module.css";
import classnames from "classnames";
import icons from "../../images/sprite.svg";

interface AccordionInterface {
  className?: string;
}
export const Accordion: React.FC<AccordionInterface> = ({ className }) => {
  return (
    <div style={{ position: "relative" }}>
      <section className={classnames(styles.accordion)}>
        <details className={classnames(styles.accordion__item)}>
          <summary className={classnames(styles.accordion__summary, className)}>
            <span className={styles.accordion__text}>
              Не берем денег за доставку!
            </span>
            <svg
              className={classnames(
                styles.accordion__icon,
                styles.accordion__icon_down
              )}
            >
              <use href={`${icons}#strelka-down`} />
            </svg>
          </summary>
          <p className={styles.accordion__open_text}>
            Вы оплачиваете только заказанные блюда. Вне зависимости от адреса,
            стоимость доставки будет равна нулю.
          </p>
        </details>
        <details className={classnames(styles.accordion__item)}>
          <summary className={classnames(styles.accordion__summary, className)}>
            <span className={styles.accordion__text}>
              Возим заказы круглосуточно и без выходных!*
            </span>
            <svg
              className={classnames(
                styles.accordion__icon,
                styles.accordion__icon_down
              )}
            >
              <use href={`${icons}#strelka-down`} />
            </svg>
          </summary>
          <p className={styles.accordion__open_text}>
            С 5:00 до 8:00 в компании технологический перерыв. В это время мы не
            принимаем звонки.
          </p>
        </details>
        <details
          className={classnames(
            styles.accordion__item,
            styles.accordion__item_big
          )}
        >
          <summary className={classnames(styles.accordion__summary, className)}>
            <span className={styles.accordion__text}>
              Сообщим время доставки перед отправкой заказа!**
            </span>
            <svg
              className={classnames(
                styles.accordion__icon,
                styles.accordion__icon_down
              )}
            >
              <use href={`${icons}#strelka-down`} />
            </svg>
          </summary>
          <p className={styles.accordion__open_text}>
            Не важно, каким образом вы делаете заказ в нашей компании. После
            указания названия улицы и номера дома, вы узнаете ориентировочное
            время доставки. Время доставки может меняться в зависимости от
            количества заказов, дорожной обстановки и погодных условий. Способы
            заказа: <span>Удобный:</span> воспользоваться сайтом;
            <span>Продвинутый: </span>
            приложениями - iOs, Android; <span>Доступный:</span> по телефонам:
            8(499)-555-5555, 8(499)-444-4444
          </p>
        </details>
        <details className={classnames(styles.accordion__item)}>
          <summary className={classnames(styles.accordion__summary, className)}>
            <span className={styles.accordion__text}>
              Принимаем различные способы оплаты!
            </span>
            <svg
              className={classnames(
                styles.accordion__icon,
                styles.accordion__icon_down
              )}
            >
              <use href={`${icons}#strelka-down`} />
            </svg>
          </summary>
          <p className={styles.accordion__open_text}>
            Наличными курьеру. Простой и привычный способ. Банковской картой на
            сайте и в приложениях. Webmoney в любой валюте. Yandex.Деньги с
            кошелька или с банковской карты.
          </p>
        </details>
        <details className={classnames(styles.accordion__item)}>
          <summary className={classnames(styles.accordion__summary, className)}>
            <span className={styles.accordion__text}>
              Принимаем отзывы, жалобы и пожелания круглосуточно!
            </span>
            <svg
              className={classnames(
                styles.accordion__icon,
                styles.accordion__icon_down
              )}
            >
              <use href={`${icons}#strelka-down`} />
            </svg>
          </summary>
          <p className={styles.accordion__open_text}>
            Контакты: Телефон СКП: 8(499)-555-5555 E-mail СКП:
            timofeevai1980@gmail.com
          </p>
        </details>
      </section>
    </div>
  );
};
