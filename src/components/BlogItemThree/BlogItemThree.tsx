import BasketContainer from '../../containers/BasketContainer/BasketContainer';
import { BasketProvider } from '../../containers/BasketProvider/BasketProvider';
import React from 'react';
import * as styles from './styles.module.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { apelsinImages } from '../constants/imgApelsin';
import 'photoswipe/dist/photoswipe.css'
import { navigate } from "gatsby"
import { Button } from '../Button/Button';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

interface BlogItemInterface {
    blogDate: string | '';
    blogName: string | '';
}
export const BlogItemThree = ({ blogDate, blogName }: BlogItemInterface) => {

    const smallItemStyles: React.CSSProperties = {
        cursor: 'pointer',
        objectFit: 'cover',
        width: '180px',
        maxHeight: '180px',
    }
    return(
        <BasketProvider>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{blogName}</h2>
                    <p className={styles.date}>{blogDate}</p>
                    <p className={styles.text}>
                        Предлагаем Вам несколько хороших идей для сервировки фркутовых щербетов к праздничному столу. Все они замечательно смотрятся и украсят Ваш торжественный прием, день рождения, годовщину свадьбы или любой другой праздник. Сделать их несложно, но потребуется немного терпения и внимательности.
                    </p>

                    <Gallery>
                        <div className={styles.gallery}
                        >
                            <Item
                                original={apelsinImages['ac24']}
                                thumbnail={apelsinImages['ac25']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac25']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac26']}
                                thumbnail={apelsinImages['ac27']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac27']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac28']}
                                thumbnail={apelsinImages['ac29']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac29']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac30']}
                                thumbnail={apelsinImages['ac31']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac31']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac32']}
                                thumbnail={apelsinImages['ac33']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac33']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac34']}
                                thumbnail={apelsinImages['ac35']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac35']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac36']}
                                thumbnail={apelsinImages['ac37']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac37']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac38']}
                                thumbnail={apelsinImages['ac39']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac39']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac40']}
                                thumbnail={apelsinImages['ac41']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac41']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac42']}
                                thumbnail={apelsinImages['ac43']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac43']} style={smallItemStyles}/>
                                )}
                            </Item>
                        </div>
                    </Gallery>

                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <Button onClick={() => navigate(-1)} name={'на предыдущую страницу'} primary={true} className={styles.button}/>
                    {/*<form>*/}
                    {/*<input type="button" class="button button-blue" value="Назад на предыдущую страницу"*/}
                    {/*onClick="history.back()">*/}
                    {/*</form>*/}
                </div>

                <BasketContainer />
            </div>

        </BasketProvider>
    )
}