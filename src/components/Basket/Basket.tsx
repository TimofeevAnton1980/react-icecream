import React, { useEffect, useRef, useState } from 'react';
import * as styles from './styles.module.css';
import classnames from 'classnames';
import { BasketModal } from '../BasketModal/BasketModal';
import { BasketModalContainer } from '../../containers/BasketModalContainer/BasketModalContainer';
interface BasketInterface {
    state?: string;
    productCount?: number | false;
    productPrice?: number;
    productId: string | null;
}
const Basket = ({
    state,
    productCount,
    productPrice,
    productId,
}: BasketInterface) => {
    const ref = useRef<HTMLDivElement>(null);
    const [open, setOpen] = React.useState(false);
    const add = (f: boolean) => setOpen(f);
    const [widthLayout, setWidthLayout] = useState('');
    useEffect(() => {
        let container = document.body.querySelector('#LayoutWrapper');
        let containerLeft = container?.getBoundingClientRect().right || 0;
        const windowInnerWidth = document.documentElement.clientWidth;
        setWidthLayout(containerLeft - 15 + 'px');
        if (windowInnerWidth <= 767) setWidthLayout('');
        ref.current?.addEventListener('click', () => add(true));
        return () => ref.current?.removeEventListener('click', () => add(true));
    });
    const styleName = { left: widthLayout };
    return (
        <div>
            <div
                ref={ref}
                className={classnames(styles.cartIcon, state && styles[state])}
                style={styleName}
            >
                <div className={styles.cartIcon__inner}>
                    <span className={styles.cartIcon__count}>
                        {productCount}
                    </span>
                    <span className={styles.cartIcon__price}>
                        ₽{productPrice?.toFixed(2)}
                    </span>
                </div>
            </div>
            <BasketModalContainer
                available={open}
                remove={add}
                productId={productId}
            />
        </div>
    );
};

export default Basket;
