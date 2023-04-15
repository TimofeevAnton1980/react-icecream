import React from 'react';
import { BasketModal } from '../../components/BasketModal/BasketModal';
import { useAppSelector } from '../../hooks/hook_ts';
import { selectProductIdsFromBasket } from '../../store/basket/selectors';

interface BasketModalContainerInterface {
    available: boolean;
    remove: (f: boolean) => void;
    productId: string | null;
}
export const BasketModalContainer = ({
    available,
    remove,
    productId,
}: BasketModalContainerInterface) => {
    const productIds: string[] = useAppSelector(selectProductIdsFromBasket);
    // console.log(productIds);
    return (
        <BasketModal
            available={available}
            remove={remove}
            productIds={productIds}
        />
    );
};
