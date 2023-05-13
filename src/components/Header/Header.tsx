import React, { useEffect, useLayoutEffect } from 'react';
import * as styles from './styles.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import {
    SlSocialFacebook,
    SlSocialGithub,
    SlSocialVkontakte,
} from 'react-icons/sl';
import { Menu } from '../Menu/Menu';
import { Link } from 'gatsby';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
// import { widthWindow } from "../constants/heigh-width";
import { NavState } from '../../containers/NavState/navState';
import { useWindowSize } from '../../hooks/useWindowSize';

interface HeadertInterface {
    siteTitle: string;
}

export const Header: React.FC<HeadertInterface> = ({ siteTitle }) => {
    // useEffect(() => {
    //   window.addEventListener("click", function () {
    //     if (menu) {
    //       menu.setAttribute("data-open", "");
    //     }
    //   });
    // });
    const [, widthWindow] = useWindowSize();

    return (
        <NavState>
            <header className={styles.header}>
                {widthWindow < 765 ? <BurgerMenu /> : null}
                <div className={styles.logo}>
                    <Link to="/" className={styles.logo__link}>
                        <div className={styles.logo_img}>&nbsp;</div>
                    </Link>

                    <div className={styles.telefon}>
                        <span className={styles.fa_phone}>
                            <BsFillTelephoneFill />
                        </span>
                        <span className={styles.telephone_1}>
                            8(499)-555-5555
                        </span>
                        <span className={styles.telephone_2}>
                            8(499)-444-4444
                        </span>
                    </div>
                </div>
                <div className={styles.socialWrap}>
                    <div className={styles.social}>
                        <a href="https://www.facebook.com/profile.php?id=100004625982884">
                            <SlSocialFacebook className={styles.href} />
                        </a>
                        <a href="https://vk.com/id50973531">
                            <SlSocialVkontakte className={styles.href} />
                        </a>
                        <a href="https://github.com/TimofeevAnton1980">
                            <SlSocialGithub className={styles.href} />
                        </a>
                    </div>
                </div>

                {widthWindow >= 765 ? <Menu /> : null}
            </header>
        </NavState>
    );
};
