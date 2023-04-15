import React, { useCallback, useContext, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook_ts';
import { RootState } from '../../store/store';
import {
    selectProductById,
    selectProductImgById,
    selectProductNameById,
    selectProductPriceById,
} from '../../store/products/selectors';
import { Item } from '../../components/Item/Item';
import basketSlice from '../../store/basket';
import { useProductWithCount } from '../../hooks/useProductWithCount';
import { ClickContext } from '../BasketProvider/BasketProvider';

interface CatalogItemInterface {
    productId: string;
    style: {};
}
export const CatalogItemsContainer = ({
    productId,
    style,
}: CatalogItemInterface) => {
    const product = useAppSelector((state: RootState) =>
        selectProductById({ state, productId }),
    );

    const productName: string = useAppSelector((state: RootState) =>
        selectProductNameById({ state, productId }),
    );
    const productImg: string = useAppSelector((state) =>
        selectProductImgById({ state, productId }),
    );
    const productPrice: number = useAppSelector((state) =>
        selectProductPriceById({ state, productId }),
    );
    const productPricePromotion = useAppSelector((state) =>
        selectProductById({ state, productId })?.promotion,
    );
    const productCount = useProductWithCount(productId);

    const { setClick } = useContext(ClickContext);
    const func = (f: any) => {
        // console.log(localStorage.getItem('counter'));
        // console.log(f.type);
        setClick(productId);
        localStorage.setItem('counter', productId);
    };

    const dispatch = useAppDispatch();
    const onRemoveProduct = useCallback(
        () => dispatch<any>(basketSlice.actions.remove({ productId })),
        [productId],
    );
    const onAddProduct = useCallback(
        () => dispatch<any>(basketSlice.actions.add({ productId })),
        [productId],
    );

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <>
            <Item
                productName={productName}
                productImg={productImg}
                productPrice={productPrice}
                productPricePromotion={productPricePromotion}
                removeProduct={onRemoveProduct}
                addProduct={onAddProduct}
                productCount={productCount}
                style={style}
                onAdd={func}
                product={product}
            />
        </>
    );
};
