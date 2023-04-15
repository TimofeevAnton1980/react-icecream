import React from "react";
import * as styles from "./styles.module.css";
import { Accordion } from "../Accordion/Accordion";
import BasketContainer from '../../containers/BasketContainer/BasketContainer';
import { FormContainer } from '../../containers/FormContainer/FormContainer';

export const Payment = () => {
  return (
      <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>Доставка и оплата</h1>
        <p className={styles.text}>
          Наш Интернет-магазин ТопАйс работает круглосуточно, Вы можете
          оформлять заказы на сайте через корзину в любое удобное для Вас время,
          предварительно пройдя регистрацию.
        </p>
        <p className={styles.text}>
          Наш менеджер свяжется с Вами по указанному при регистрации телефону,
          подтвердит заказ и уточнит удобное для Вас время его доставки.
        </p>
        <p className={styles.text}>
          <b>Заказанные товары доставляются в течение 1-2 рабочих дней</b>,
          после подтверждения их менеджером интернет-магазина ТопАйс (отправкой
          подтверждения на Вашу электронную почту, либо по телефону). Если мы не
          сможем связаться с Вами в течение 3 рабочих дней с момента оформления
          заказа по указанным телефонам - заказ аннулируется! Будьте внимательны
          при оформлении заказа и, пожалуйста, укажите максимально возможное
          количество работающих телефонов.
        </p>
        <Accordion className={styles.accordion} />
      <FormContainer />
      </div>
      <BasketContainer />
    </div>
  );
};
