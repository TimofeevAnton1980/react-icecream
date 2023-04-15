import React from 'react';
// import styles from "./styles.module.css"
import * as styles from './styles.module.css';

import { HitContainer } from '../../containers/HitContainer/HitContainer';

interface HitsInterface {
    productIds: string[];
}
export const Hits: React.FC<HitsInterface> = ({ productIds }) => {
    const newArray: string[] = productIds?.filter(
        (productId: string) =>
            productId === '99bb6fbb-e53b-4b7e-b9c2-23b63b77385e' ||
            productId === 'd75f762a-eadd-49be-8918-ed0daa8dd024' ||
            productId === 'c3cb8f92-a2ed-4716-92a1-b6ea813e9049' ||
            productId === 'bd129641-c0eb-432b-84b6-8b81d2930358',
    );

    return (
        <div className={styles.root}>
            {newArray?.map((id) => (
                <HitContainer key={id} productId={id} />
            ))}
        </div>
    );
};
