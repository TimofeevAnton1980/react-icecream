import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import icons from '../../images/sprite.svg';

interface AccordionInterface {
    className?: string;
    details?: string;
    summary?: string;
    size?: 'small' | 'medium' | 'large';
}
export const Accordion: React.FC<AccordionInterface> = ({
    className,
    details,
    summary,
    size,
}) => {
    return (
        <div style={{ position: 'relative' }}>
            <section className={classnames(styles.accordion)}>
                <details
                    className={classnames(
                        styles.accordion__item,
                        { [styles.accordion__item_big]: size === 'large' },
                        { [styles.accordion__item_small]: size === 'small' },
                        { [styles.accordion__item_medium]: size === 'medium' },
                    )}
                >
                    <summary
                        className={classnames(
                            styles.accordion__summary,
                            className,
                        )}
                    >
                        <span>{summary}</span>
                        <svg
                            className={classnames(
                                styles.accordion__icon,
                                styles.accordion__icon_down,
                            )}
                        >
                            <use href={`${icons}#strelka-down`} />
                        </svg>
                    </summary>
                    <p className={styles.accordion__open_text}>{details}</p>
                </details>
                <details
                    className={classnames(
                        styles.accordion__item,
                        { [styles.accordion__item_big]: size === 'large' },
                        { [styles.accordion__item_small]: size === 'small' },
                        { [styles.accordion__item_medium]: size === 'medium' },
                    )}
                >
                    <summary
                        className={classnames(
                            styles.accordion__summary,
                            className,
                        )}
                    >
                        <span>{summary}</span>
                        <svg
                            className={classnames(
                                styles.accordion__icon,
                                styles.accordion__icon_down,
                            )}
                        >
                            <use href={`${icons}#strelka-down`} />
                        </svg>
                    </summary>
                    <p className={styles.accordion__open_text}>{details}</p>
                </details>
                <details
                    className={classnames(
                        styles.accordion__item,
                        { [styles.accordion__item_big]: size === 'large' },
                        { [styles.accordion__item_small]: size === 'small' },
                        { [styles.accordion__item_medium]: size === 'medium' },
                    )}
                >
                    <summary
                        className={classnames(
                            styles.accordion__summary,
                            className,
                        )}
                    >
                        <span>{summary}</span>
                        <svg
                            className={classnames(
                                styles.accordion__icon,
                                styles.accordion__icon_down,
                            )}
                        >
                            <use href={`${icons}#strelka-down`} />
                        </svg>
                    </summary>
                    <p className={styles.accordion__open_text}>{details}</p>
                </details>
                <details
                    className={classnames(
                        styles.accordion__item,
                        { [styles.accordion__item_big]: size === 'large' },
                        { [styles.accordion__item_small]: size === 'small' },
                        { [styles.accordion__item_medium]: size === 'medium' },
                    )}
                >
                    <summary
                        className={classnames(
                            styles.accordion__summary,
                            className,
                        )}
                    >
                        <span>{summary}</span>
                        <svg
                            className={classnames(
                                styles.accordion__icon,
                                styles.accordion__icon_down,
                            )}
                        >
                            <use href={`${icons}#strelka-down`} />
                        </svg>
                    </summary>
                    <p className={styles.accordion__open_text}>{details}</p>
                </details>
                <details
                    className={classnames(
                        styles.accordion__item,
                        { [styles.accordion__item_big]: size === 'large' },
                        { [styles.accordion__item_small]: size === 'small' },
                        { [styles.accordion__item_medium]: size === 'medium' },
                    )}
                >
                    <summary
                        className={classnames(
                            styles.accordion__summary,
                            className,
                        )}
                    >
                        <span>{summary}</span>
                        <svg
                            className={classnames(
                                styles.accordion__icon,
                                styles.accordion__icon_down,
                            )}
                        >
                            <use href={`${icons}#strelka-down`} />
                        </svg>
                    </summary>
                    <p className={styles.accordion__open_text}>{details}</p>
                </details>
            </section>
        </div>
    );
};
