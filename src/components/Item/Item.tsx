import React from 'react';
import * as styles from './styles.module.css';
import { Button } from '../Button/Button';
import classnames from 'classnames';
import * as css from '../Button/styles.module.css';
import { arrayImages } from '../constants/imgsIceCream';
import { imgSize, widthWindow } from '../constants/heigh-width';
import { Rating } from '../Rating/Rating';
import { Product } from '../../store/products';

interface ItemInterface {
    productName: string;
    productImg: string;
    productPrice: number;
    removeProduct: () => any;
    addProduct: (e: React.MouseEvent<HTMLElement>) => void;
    style: {};
    productCount: number;
    onAdd: (f: any) => any;
    product: Product;
    productPricePromotion: boolean;
}

export const Item: React.FC<ItemInterface> = ({
    productName,
    productImg,
    productPrice,
    removeProduct,
    addProduct,
    productCount,
    style,
    onAdd = (f) => f,
    product,
                                                  productPricePromotion
}) => {
    const iceImg = arrayImages[productImg];
    const newPrice = productPrice - 30;
    return (
        <div className={styles.item} style={{ ...style }}>
            <img
                alt={productName}
                src={iceImg}
                className={styles.img}
                width={imgSize}
                height={imgSize}
            />
            <Rating value={product.rating} />
            <div className={styles.name}>{productName}</div>
            <div className={styles.price}>{productPricePromotion ? <span><span style={{textDecoration: 'line-through', color: 'red'}}>{productPrice}₽/кг</span>&nbsp;{newPrice}</span> : productPrice}₽/кг</div>
            <div className={styles.containerButton}>
                <div className={styles.actions}>
                    <button
                        onClick={removeProduct}
                        className={styles.action}
                        disabled={productCount <= 0}
                    >
                        -
                    </button>
                    <div className={styles.count}>{productCount}</div>
                    <button
                        onClick={addProduct}
                        className={styles.action}
                        disabled={productCount >= 25}
                    >
                        +
                    </button>
                </div>
                <Button
                    className={classnames(css.button, styles.button)}
                    label={'Button'}
                    name={'в корзину'}
                    primary={true}
                    onAdd={onAdd}
                    onClick={(f) => onAdd(f)}
                />
            </div>
        </div>
    );
};
