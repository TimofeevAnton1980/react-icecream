import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React from 'react';
import * as styles from './styles.module.css';

export const MapMy = () => {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 10,
        llang: 'ru_RU',
    };
    return (
        <div className={styles.root}>
            <YMaps>
                <Map defaultState={defaultState} className={styles.map}>
                    <Placemark geometry={[55.771109, 37.48551]} />
                </Map>
            </YMaps>
        </div>
    );
};
