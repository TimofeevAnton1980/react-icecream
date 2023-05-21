import React from 'react';
import { RootState } from '../store';

type BasketProps = {
    state: RootState;
    productId: string;
};

export const selectBasket = (state: RootState) => state.basket;

export const selectProductIdsFromBasket = (state: RootState) => {
    const basket = selectBasket(state);

    return Object.keys(basket).filter((productId) => !!basket[productId]);
};

export const selectProductCountFromBasket = ({
    state,
    productId,
}: BasketProps) => selectBasket(state)[productId] || 0;

export const productCount = (state: RootState) => {
    const productIdsBasket = selectProductIdsFromBasket(state);
    return (
        productIdsBasket?.length &&
        productIdsBasket.reduce(
            (totalCount, productId: string) =>
                totalCount + state.basket[productId] || 0,
            0,
        )
    );
};
export const totalPrice = (state: RootState) => {
    const productIdsBasket = selectProductIdsFromBasket(state);
    return (
        productIdsBasket?.length &&
        productIdsBasket.reduce(
            (totalPrice, productId: string) =>
                totalPrice +
                (state.product.entities[productId || '']?.price || 0) *
                    (state.basket[productId] || 0),
            0,
        )
    );
};
