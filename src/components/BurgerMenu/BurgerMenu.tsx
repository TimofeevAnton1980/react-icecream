import React, { useContext, useRef } from 'react';
import * as styles from './styles.module.css';
import HamburgerButton from './HamburgerButton';
import { MenuContext } from '../../containers/NavState/navState';
import { SideMenu } from './SideMenu';
import { useOnClickOutside } from '../../hooks/onClickOutside';

export const BurgerMenu = () => {
    const node = useRef<HTMLDivElement>(null);
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <div className={styles.burgerMenu}>
            <HamburgerButton useProps={`#burger-button`} />
            <SideMenu ref={node} open={isMenuOpen} />
        </div>
    );
};
