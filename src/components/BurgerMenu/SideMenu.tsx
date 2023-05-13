import React, { useContext } from 'react';
import * as styles from './styles.module.css';
import classnames from 'classnames';
import { MenuContext } from '../../containers/NavState/navState';
import HamburgerButton from './HamburgerButton';
import { Link } from 'gatsby';

type divProps = React.HTMLProps<HTMLDivElement>;

export const SideMenu = React.forwardRef<HTMLDivElement, divProps>(
    (props, ref) => {
        const { isMenuOpen } = useContext(MenuContext);
        const style = isMenuOpen ? { transform: 'translateX(0)' } : {};
        return (
            <div
                id="burgerMenu"
                className={classnames(styles.burgerMenu__page)}
                style={style}
            >
                <div
                    className={classnames(styles.burgerMenu__window)}
                    ref={ref}
                >
                    <HamburgerButton useProps={`#close`} />

                    <ul className={classnames(styles.burgerMenu_list)}>
                        <li>
                            <Link to="/" state={{ mode: 'home' }}>
                                Домой
                            </Link>
                        </li>
                        <li className={styles.burgerMenu_dropdown}>
                            <a href="#" style={{ pointerEvents: 'none' }}>
                                Каталог
                            </a>
                            <ul className={styles.burgerMenu_dropdownMenu}>
                                <li>
                                    <Link
                                        to="/catalog"
                                        state={{ mode: 'catalog' }}
                                    >
                                        Сливочное
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/catalog1"
                                        state={{ mode: 'catalog' }}
                                    >
                                        Щербеты
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/catalog2"
                                        state={{ mode: 'catalog' }}
                                    >
                                        Фруктовый лед
                                    </Link>
                                </li>
                                {/*<li>*/}
                                {/*  <Link to="/catalog" state={{ mode: "catalog" }}>*/}
                                {/*    Мелорин*/}
                                {/*  </Link>*/}
                                {/*</li>*/}
                            </ul>
                        </li>
                        <li>
                            <Link to="/promotion" state={{ mode: 'promotion' }}>
                                Акция
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" state={{ mode: 'blog' }}>
                                Блог
                            </Link>
                        </li>
                        <li>
                            <Link to="/payment" state={{ mode: 'payment' }}>
                                Доставка и оплата
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    },
);
