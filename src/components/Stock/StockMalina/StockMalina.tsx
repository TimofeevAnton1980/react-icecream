// import styles from './styles.module.css'
import * as styles from './styles.module.css';
import React from 'react';
import classnames from 'classnames';
// import css from '../../Button/styles.module.css'
import * as css from '../../Button/styles.module.css';
import { Link } from 'gatsby';
import { useAppSelector } from '../../../hooks/hook_ts';
import { RootState } from '../../../store/store';
import { selectProductFruits, selectProductIds } from '../../../store/products/selectors';

export const StockMalina = () => {
    const productIdsStock = useAppSelector((state: RootState) => selectProductFruits(state));
    return (
        <div className={styles.rootMalina}>
            <h3 className={styles.title}>Малинка даром!</h3>
            <p className={styles.text}>
                При покупке 2 кг любого фруктового мороженого, добавим в ваш
                заказ банку малинового варенья бесплатно.
            </p>
            <div className={styles.buttonWrapper}>
                <Link
                    to={`/catalog`}
                    title="Каталог"
                    className={classnames(css.button, css.button_primary, styles.button)}
                    state={{ mode: "catalog" , productIdsStock: productIdsStock}}
                >
                    Хочу варенье!
                </Link>
            </div>
        </div>
    );
};