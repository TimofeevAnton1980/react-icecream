// import css from '../../Button/styles.module.css'
import * as css from '../../Button/styles.module.css';
import React from 'react';
import classnames from 'classnames';
// import styles from './styles.module.css'
import * as styles from './styles.module.css';
import { Link } from 'gatsby';
import { useAppSelector } from '../../../hooks/hook_ts';
import { RootState } from '../../../store/store';
import { selectProductNoFruits } from '../../../store/products/selectors';

export const StockChocolate = () => {
    const productIdsStock = useAppSelector((state: RootState) =>
        selectProductNoFruits(state),
    );
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
                <h3 className={styles.title}>Шоколадки даром</h3>
                <p className={styles.text}>
                    При покупке 2 кг пломбира, добавим в ваш заказ упаковку
                    вкуснейшей шоколадной присыпки абсолютно бесплатно.
                </p>
                <div className={styles.buttonWrapper}>
                    <Link
                        to={`/catalog`}
                        title="Каталог"
                        className={classnames(
                            css.button,
                            css.button_primary,
                            styles.button,
                        )}
                        state={{
                            mode: 'catalog',
                            productIdsStock: productIdsStock,
                        }}
                    >
                        Хочу шоколадки!
                    </Link>
                </div>
            </div>
        </div>
    );
};
