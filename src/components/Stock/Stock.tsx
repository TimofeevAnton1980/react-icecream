// import styles from "./styles.module.css"
import * as styles from './styles.module.css';
import { StockMalina } from './StockMalina/StockMalina';
import React from 'react';
import { StockChocolate } from './StockChocolate/StockChocolate';

export const Stock = () => {
    return (
        <div className={styles.root}>
            <StockMalina />
            <StockChocolate />
        </div>
    );
};
