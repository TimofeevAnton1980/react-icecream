import { Stock } from '../Stock/Stock';
import { HitsContainer } from '../../containers/HitsContainer/HitsContainer';
import React from 'react';
import * as styles from './styles.module.css';

import StickySlider from '../Slider/Slider';
import PresentSlider from '../Presentation/Presentation';
import NewInBlogMailingLst from '../NewInBlogMailingLst/NewInBlogMailingLst';
import { Contacts } from '../Contacts/Contacts';
import { MapMy } from '../Map/Map';
import BasketContainer from '../../containers/BasketContainer/BasketContainer';
import { BasketProvider } from '../../containers/BasketProvider/BasketProvider';

export const Main = () => {
    return (
        <BasketProvider>
        <div className={styles.main}>
            <StickySlider />
            <Stock />
            <HitsContainer />
            <PresentSlider />
            <NewInBlogMailingLst />
            <Contacts />
            <MapMy />
            <BasketContainer />
        </div>
        </BasketProvider>

    );
};
