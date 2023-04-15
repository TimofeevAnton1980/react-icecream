import React from 'react';
import { useAppSelector } from '../../hooks/hook_ts';
import {
    selectProductImgById,
    selectProductNameById,
    selectProductPriceById,
} from '../../store/products/selectors';
import { Hit } from '../../components/Hit/Hit';
import { RootState } from '../../store/store';

interface HitContainerInterface {
    productId: string;
}
export const HitContainer: React.FC<HitContainerInterface> = ({
    productId,
}) => {
    const productName: string = useAppSelector((state: RootState) =>
        selectProductNameById({ state, productId }),
    );
    const productImg: string = useAppSelector((state) =>
        selectProductImgById({ state, productId }),
    );
    const productPrice: number = useAppSelector((state) =>
        selectProductPriceById({ state, productId }),
    );

    return (
        <Hit
            productId={productId}
            name={productName}
            img={productImg}
            price={productPrice}
        />
    );
};
