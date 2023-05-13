import React from 'react';
import { useAppSelector } from '../../hooks/hook_ts';
import { selectProductIds } from '../../store/products/selectors';
import { RootState } from '../../store/store';
import CatalogItems from '../../components/CatalogItems/CatalogItems';
interface CatalogContainerInterface {
    productIdHit: string;
    productIdsStock: string[];
}

export const CatalogContainer = ({
    productIdHit,
    productIdsStock,
}: CatalogContainerInterface) => {
    const productIds = useAppSelector((state: RootState) =>
        selectProductIds(state),
    );
    // console.log(productIds);
    return (
        <CatalogItems
            productIds={productIds}
            productIdHit={productIdHit}
            productIdsStock={productIdsStock}
        />
    );
};
