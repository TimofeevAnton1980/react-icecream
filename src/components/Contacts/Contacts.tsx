// import styles from "./styles.module.css";
import * as styles from './styles.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { AiFillMail } from 'react-icons/ai';
import classnames from 'classnames';

export const Contacts = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h2 className={styles.title}>Наши Контакты</h2>
                <div className={styles.contentFlex}>
                    <div className={classnames(styles.group, styles.group_1)}>
                        <span className={styles.fa_elem}>
                            <BsFillTelephoneFill />
                        </span>
                        <span className={styles.element_1}>ТЕЛЕФОН</span>
                        <span className={styles.element_2}>
                            +1(555)-555-555
                        </span>
                    </div>
                    <div className={classnames(styles.group, styles.group_2)}>
                        <span className={styles.fa_elem}>
                            <FaMapMarkerAlt />
                        </span>
                        <span className={styles.element_1}>ГЛАВНЫЙ ОФИС</span>
                        <span className={styles.element_2}>
                            Москва, ул. Демьяна Бедного
                        </span>
                    </div>
                    <div className={classnames(styles.group, styles.group_3)}>
                        <span className={styles.fa_elem}>
                            <AiFillMail />
                        </span>
                        <span className={styles.element_1}>ПОЧТА</span>
                        <span className={styles.element_2}>
                            timofeevai1980
                            <wbr />
                            @gmail.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
