import React, { useState } from 'react';
import { FixedSizeList } from 'react-window';
import * as styles from './styles.module.css';
import { CatalogItemsContainer } from '../../containers/CatalogItemsContainer/CatalogItemsContainer';
import { heightWindow, size, widthWindow } from '../constants/heigh-width';
import BasketContainer from '../../containers/BasketContainer/BasketContainer';
import { BasketProvider } from '../../containers/BasketProvider/BasketProvider';

interface renderRowInterface {
    index: number;
    style: {};
}
interface CatalogInterface {
    productIds: string[];
    productIdHit: string;
    productIdsStock: string[];
}

const CatalogItems: React.FC<CatalogInterface> = ({
    productIds,
    productIdHit,
    productIdsStock,
}) => {
    // let listArray = productIds.map((id) => id);
    let listArray = productIds.slice();
    if (productIdsStock) {
        listArray = productIdsStock;
    }
    if (productIdHit) {
        let indexEl = listArray.findIndex(
            (product) => product === productIdHit,
        );
        listArray.splice(indexEl, 1);
        listArray.unshift(productIdHit);
    }

    const Items = ({ index, style }: renderRowInterface) => (
        <CatalogItemsContainer
            productId={listArray[index]}
            style={{
                ...(index % 2 == 0
                    ? { backgroundColor: '#F7F7F7' }
                    : { backgroundColor: 'white' }),
                ...(listArray.length == index + 1 && {
                    borderBottomLeftRadius: '15px',
                    borderBottomRightRadius: '15px',
                }),
                ...style,
            }}
            key={index}
        />
    );
    return (
        <BasketProvider>
            <div className={styles.contentWrapper}>
                <FixedSizeList
                    className={styles.content}
                    height={heightWindow}
                    width={widthWindow - 50}
                    itemCount={listArray.length}
                    itemSize={size}
                >
                    {Items}
                </FixedSizeList>
                <BasketContainer />
            </div>
        </BasketProvider>
    );
};
export default CatalogItems;
