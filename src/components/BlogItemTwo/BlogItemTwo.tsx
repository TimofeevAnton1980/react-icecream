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
export const BlogItemTwo = ({ blogDate, blogName }: BlogItemInterface) => {

    const smallItemStyles: React.CSSProperties = {
        cursor: 'pointer',
        objectFit: 'cover',
        width: '300px',
        maxHeight: '300px',
    }
    return(
        <BasketProvider>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{blogName}</h2>
                    <p className={styles.date}>{blogDate}</p>
                    <p className={styles.text}>
                        Нет, наверное, на планете такого человека, который не любил бы мороженое. Это самый
                        популярный в мире десерт. В жару он охлаждает, а в холодное время дарит воспоминания о лете.
                        Мороженое вкусно само по себе, но используют его и как основу для создания более сложных
                        десертов. Это актуально, когда речь идет об особом случае, будь то торжественное застолье,
                        детский день рождения, дружеская вечеринка или романтическая встреча. В такой ситуации
                        хочется подать мороженое по-особенному — красиво и необычно вкусно.
                    </p>
                    <p className={styles.text}>
                        Мороженое чаще всего подают в виде шариков. Используют для этого специальную ложку для
                        мороженого с выталкивателем. Выглядит она примерно так:
                    </p>
                    <Gallery>
                        <div className={styles.gallery}
                        >
                            <Item
                                original={apelsinImages['ac13']}
                                thumbnail={apelsinImages['ac13']}
                                width="1024"
                                height="768"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac13']} style={smallItemStyles}/>
                                )}
                            </Item>
                        </div>
                    </Gallery>
                    <p className={styles.text}>
                        Прежде чем готовить десерт для гостей, стоит потренироваться. Поставьте рядом емкость с
                        чистой водой и макайте в нее ложку перед тем, как зачерпнуть мороженое.
                    </p>
                    <Gallery>
                        <div className={styles.gallery}>
                            <Item
                                original={apelsinImages['ac23']}
                                thumbnail={apelsinImages['ac23']}
                                width="1024"
                                height="768"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac23']} style={smallItemStyles}/>
                                )}
                            </Item>
                        </div>
                    </Gallery>
                    <p className={styles.text}>
                        Если специальной ложки для мороженого нет, его можно разложить в креманки обычным способом
                        или выдавить из мешка пирамидкой. Слегка размягченное мороженое нужно выложить в плотный
                        целлофановый пакет, отрезав у него один уголок.

                        Если хочется подать мороженое менее буднично, разложите его не в креманки, а, например, в
                        бокалы для мартини или для коктейлей.

                        Можно подавать мороженое и в тарелочках, но обязательно с бортиком.</p>
                    <Gallery>
                    <div className={styles.gallery}>
                            <Item
                                original={apelsinImages['ac22']}
                                thumbnail={apelsinImages['ac22']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac22']} style={smallItemStyles}/>
                                )}
                            </Item>
                        </div>
                    </Gallery>
                    <p className={styles.text}>
                        Дополняют мороженое в креманках, бокалах и тарелках фруктами, ягодами, сиропами, шоколадной
                        глазурью, шоколадной стружкой, разноцветными драже, орехами, ломтиками печенья и др.
                    </p>
                    <Gallery>
                        <div className={styles.gallery}
                        >
                            <Item
                                original={apelsinImages['ac18']}
                                thumbnail={apelsinImages['ac18']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac18']} style={smallItemStyles}/>
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