import React from 'react';
// import styles from './styles.module.css'
import * as styles from './styles.module.css';
import { arrayImages } from '../constants/imgsIceCream';
import { Button } from '../Button/Button';
import classnames from 'classnames';
// import css from '../Button/styles.module.css'
import * as css from '../Button/styles.module.css';
import { Link } from 'gatsby';

interface HitInterface {
    name: string;
    productId: string;
    img: string;
    price: number;
}
export const Hit: React.FC<HitInterface> = ({
    productId,
    name,
    img,
    price,
}) => {
    const iceImg = arrayImages[img];
    return (
        <div className={styles.root}>
            <img alt={name} src={iceImg} className={styles.img} />
            <span className={styles.price}>{price}₽/кг</span>
            <Link
                to={`/catalog`}
                title="Каталог"
                className={classnames(
                    css.button,
                    css.button_none,
                    styles.button,
                )}
                state={{ mode: "catalog" , productIdHit: productId}}
            >
                {name}
            </Link>
        </div>
    );
};
