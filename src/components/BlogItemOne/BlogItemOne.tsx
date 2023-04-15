import BasketContainer from '../../containers/BasketContainer/BasketContainer';
import { BasketProvider } from '../../containers/BasketProvider/BasketProvider';
import React from 'react';
import * as styles from './styles.module.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { apelsinImages } from '../constants/imgApelsin';
import 'photoswipe/dist/photoswipe.css'
import { navigate } from "gatsby"
import { Button } from '../Button/Button';

interface BlogItemInterface {
    blogDate: string | '';
    blogName: string | '';
}
export const BlogItemOne = ({ blogDate, blogName }: BlogItemInterface) => {

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
                    Этот способ подачи мороженого весьма популярен на Западе. Так
                    угощают детей и взрослых на домашних праздниках.
                </p>
                <p className={styles.text}>
                    Чаще всего используют апельсины. Нужно срезать верхушку и
                    выбросить ее, затем аккуратно вынуть ложкой немного мякоти
                    апельсина, чтобы образовалась полость. Подготовить нужное
                    количество апельсиновых «чашечек», затем уложить в каждую из них
                    по шарику мороженого или заполнить «чашечки» мороженым с помощью
                    ложки. Сверху можно полить апельсин с мороженым сиропом,
                    шоколадной глазурью или карамелью.
                </p>

                    <Gallery>
                        <div className={styles.gallery}
                        >
                            <Item
                                original={apelsinImages['ac9']}
                                thumbnail={apelsinImages['ac9']}
                                width="1024"
                                height="768"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac9']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac6']}
                                thumbnail={apelsinImages['ac6']}
                                width="1024"
                                height="768"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac6']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac10']}
                                thumbnail={apelsinImages['ac10']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac10']} style={smallItemStyles}/>
                                )}
                            </Item>
                        </div>
                    </Gallery>

                <p className={styles.text}>
                    Аналогичным образом наполняют яблоки, лимоны, персики и
                    маленькие дыньки. Яблоки могут быть как свежими, так и слегка
                    запеченными. Лучше, конечно, немного запечь их, чтобы они стали
                    мягче. Так будет легче вынуть сердцевину, освободив место под
                    мороженое. Да и само яблоко станет слаще. Мороженое в яблоках
                    обычно поливают карамелью и посыпают орехами.
                </p>

                    <Gallery withCaption>
                        <div className={styles.gallery}
                        >
                            <Item
                                original={apelsinImages['ac5']}
                                thumbnail={apelsinImages['ac5']}
                                width="1024"
                                height="1024"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac5']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac4']}
                                thumbnail={apelsinImages['ac4']}
                                width="1024"
                                height="768"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac4']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac11']}
                                thumbnail={apelsinImages['ac11']}
                                width="1024"
                                height="768"
                                alt="Десерт с мороженым и дыней (канталупой)"
                                caption="Десерт с мороженым и дыней (канталупой)"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac11']} style={smallItemStyles}/>
                                )}
                            </Item>
                            <Item
                                original={apelsinImages['ac14']}
                                thumbnail={apelsinImages['ac14']}
                                width="1024"
                                height="768"
                                alt="Десерт с мороженым в тропическом стиле"
                                caption="Десерт с мороженым в тропическом стиле"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={apelsinImages['ac14']} style={smallItemStyles}/>
                                )}
                            </Item>
                        </div>
                    </Gallery>
                <p className={styles.text}>
                    <span className={styles.text_bold}>Как приготовить карамель для мороженого?</span> Взять один
                    стакан сахара, столовую ложку воды и стакан жирных сливок.
                    Высыпать сахар в кастрюльку, добавить ложку воды, поставить на
                    огонь. Помешивать, пока масса не приобретет коричневый цвет и
                    консистенцию густой карамели. После этого нужно снять кастрюлю с
                    огня и сразу же очень осторожно влить стакан сливок. Хорошенько
                    перемешать до получения гладкой карамели. По желанию можно
                    добавить немного ванили. Поливать мороженое остывшей карамелью.
                </p>
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