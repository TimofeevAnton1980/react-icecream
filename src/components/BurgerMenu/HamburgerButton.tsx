import React, { useContext } from 'react';
import * as styles from './styles.module.css';
import icons from '../../images/sprite.svg';
import { MenuContext } from '../../containers/NavState/navState';
import classnames from 'classnames';

interface ButtonInterface {
    useProps: {};
}
const HamburgerButton = ({ useProps }: ButtonInterface) => {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    const clickHandler = () => {
        toggleMenuMode();
        // console.log(isMenuOpen);
    };

    return (
        <button
            type="button"
            id="burgerMenu-open"
            className={classnames(
                styles.burgerMenu__button,
                isMenuOpen ? styles.burgerMenu__button_close : '',
            )}
            aria-label="Открыть главное меню"
            onClick={clickHandler}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.burgerMenu__icon}
            >
                <use xlinkHref={`${icons}${useProps}`} />
            </svg>
        </button>
    );
};

export default HamburgerButton;
