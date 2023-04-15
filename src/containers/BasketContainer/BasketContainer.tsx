import React, { useEffect, useRef } from 'react';
import { useAppSelector } from '../../hooks/hook_ts';
import { productCount, totalPrice } from '../../store/basket/selectors';
import { BasketItem } from '../Basket/BasketItem';

const BasketContainer = () => {
    const price = useAppSelector((state) => totalPrice(state));
    const count = useAppSelector((state) => productCount(state));

    return <BasketItem productCount={count} totalPrice={price} />;
};

export default BasketContainer;
