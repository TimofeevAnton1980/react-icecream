import React from 'react';
import Star from './img/star.svg';
import GoldStar from './img/star-gold.svg';
import * as styles from './styles.module.css';
import classnames from 'classnames';
import { MAX_RATING } from './constants';

export type ValueProps = {
    value: number;
    size?: 'medium' | 'small';
};

export const Rating = ({ value, size = 'small' }: ValueProps) => {
    return (
        <div>
            {new Array(MAX_RATING).fill(null).map((_, index) => (
                <img
                    src={index >= value ? Star : GoldStar}
                    key={index}
                    className={classnames(styles.star, styles[size])}
                    loading="lazy"
                    alt={''}
                />
            ))}
        </div>
    );
};
