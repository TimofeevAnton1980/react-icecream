import React from 'react';
import * as styles from './styles.module.css';
import classnames from 'classnames';
import bt1 from '../../images/square-minus-icon.svg';
import bt2 from '../../images/square-plus-icon.svg';

type Props = {
    productName: string;
    productCount: number;
    productPrice: number;
    productImg: string;
    removeProduct: () => any;
    addProduct: (e: React.MouseEvent<HTMLElement>) => void;
};

export const BasketModalItem = ({ productName, productCount, productPrice, productImg, removeProduct, addProduct }: Props) => (
<div className={styles.cartProduct} data-product-id="penang-shrimp">
    <div className={styles.cartProduct__img}>
        <img src={productImg}  alt="product" />
    </div>
    <div className={styles.cartProduct__info}>
        <div className={styles.cartProduct__title}>{productName}</div>
        <div className={styles.cartProduct__priceWrap}>
            <div className={styles.cartProduct__counter}>
                <button onClick={removeProduct} type="button" className={classnames(styles.cartProduct__button, styles.cartProduct__button_minus)}>
                    <img src={bt1} alt="minus" />
                </button>
                <span className={styles.cartProduct__count}>{productCount}</span>
                <button onClick={addProduct} type="button" className={classnames(styles.cartProduct__button, styles.cartProduct__button_plus)}>
                    <img src={bt2} alt="plus" />
                </button>
            </div>
            <div className={styles.cartProduct__price}>₽{(productPrice * productCount).toFixed(2)}</div>
        </div>
    </div>
</div>
);
