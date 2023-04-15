import {
    useProductWithCount, useProductWithImg,
    useProductWithName, useProductWithPrice,
} from '../../hooks/useProductWithCount';
import React, { useCallback } from 'react';
import { BasketModalItem } from '../../components/BasketModalItem/BasketModalItem';
import { arrayImages } from '../../components/constants/imgsIceCream';
import { useAppDispatch } from '../../hooks/hook_ts';
import basketSlice from '../../store/basket';

type Props = {
    productId: string;
};

export const BasketItemContainer = ({ productId }: Props) => {
    const productName = useProductWithName(productId || '');
    const productCount = useProductWithCount(productId || '');
    const productPrice = useProductWithPrice(productId || '');
    const productImg = useProductWithImg(productId || '');
    const iceImg = arrayImages[productImg];

    const dispatch = useAppDispatch();
    const onRemoveProduct = useCallback(
        () => dispatch<any>(basketSlice.actions.remove({ productId })),
        [productId],
    );
    const onAddProduct = useCallback(
        () => dispatch<any>(basketSlice.actions.add({ productId })),
        [productId],
    );

    return (
        <BasketModalItem
            productName={productName}
            productCount={productCount}
            productPrice={productPrice}
            productImg={iceImg}
            removeProduct={onRemoveProduct}
            addProduct={onAddProduct}
        />
    );
};
