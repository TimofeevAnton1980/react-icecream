import React from 'react';
import * as styles from './styles.module.css';
import icon from '../../images/cross-icon.svg';
import { BasketItemContainer } from '../../containers/BasketItemContainer/BasketItemContainer';
import { FormContainerModal } from '../../containers/FormContainerModal/FormContainer';
import { useAppSelector } from '../../hooks/hook_ts';
import { totalPrice } from '../../store/basket/selectors';

interface BasketModalInterface {
    available: boolean;
    remove: (f: boolean) => void;
    productIds: string[];
}
export const BasketModal = ({
    available,
    remove = (f) => f,
    productIds,
}: BasketModalInterface) => {
    if (!available) return null;
    // const count = useAppSelector((state) => productCount(state));
    const price = useAppSelector((state) => totalPrice(state));
    return (
        <div
            className={styles.modal}
            id={'BasketModal'}
            // style={{ display: available ? 'block' : 'none' }}
        >
            <div className={styles.modal__overlay}></div>
            <div className={styles.modal__inner}>
                <div className={styles.modal__header}>
                    <h3 className={styles.modal__title}>Ваш заказ</h3>
                    <button
                        type="button"
                        className={styles.modal__close}
                        onClick={() => remove(false)}
                    >
                        <img src={icon} alt="close-icon" />
                    </button>
                </div>
                <div className={styles.modal__body}>
                    {productIds?.length > 0 &&
                        productIds.map((productId) => (
                            <BasketItemContainer
                                key={productId}
                                productId={productId}
                            />
                        ))}
                    <FormContainerModal price={price} />
                </div>
            </div>
        </div>
    );
};
