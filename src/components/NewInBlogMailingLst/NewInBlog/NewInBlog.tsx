import * as styles from './styles.module.css';
// import styles from "./styles.module.css"
import React from 'react';
import { Link } from 'gatsby';

export const NewInBlog = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h3 className={styles.title}>Новое в нашем блоге</h3>
                <ul className={styles.ul}>
                    <li>
                        <Link
                            to={`/blogItemOne`}
                            state={{
                                mode: 'blog',
                                blogDate: `29 Март 2023`,
                                blogName: `Мороженое в «стаканчиках» из фруктов`,
                            }}
                            title="Мороженое в «стаканчиках» из фруктов"
                            className={styles.href}
                        >
                            Мороженое в «стаканчиках» из фруктов
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/blogItemTwo`}
                            state={{
                                mode: 'blog',
                                blogDate: `17 Март 2023`,
                                blogName: `Как красиво подать мороженое к столу`,
                            }}
                            title="Как красиво подать мороженое к столу"
                            className={styles.href}
                        >
                            Как красиво подать мороженое к столу
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
