import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import * as css from './styles.module.css';
import { Autoplay, Navigation, Pagination } from 'swiper';
import svg1 from '../../images/ice-cream.svg';
import svg2 from '../../images/cow.svg';
import svg3 from '../../images/leaf.svg';
import svg4 from '../../images/temperature.svg';

const PresentSlider = () => {
    const params = {
        slidesPerView: 1,
        modules: [Navigation, Pagination, Autoplay],
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        speed: 800,
        loop: false,
        spaceBetween: 60,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
    };

    return (
        <div className={css.containerWrapper}>
            <div className={css.container}>
                <div className={css.swiperContainer}>
                    <h2 className={css.title}>
                        Магазин Глейси — это онлайн и офлайн магазин по продаже
                        мороженого
                        <br />
                        собственного производства на развес
                    </h2>
                    <Swiper {...params}>
                        <div className={css.contentWrapper}>
                            <div className={css.content}>
                                <img src={svg1} alt={''} className={css.img} />
                                <div>
                                    Все наше мороженое изготавливается на
                                    собственном производстве, с использованием
                                    современного оборудования и проверенных
                                    временем технологий.
                                </div>
                            </div>
                            <div className={css.content}>
                                <img src={svg2} alt={''} className={css.img} />
                                <div>
                                    Закупка ингредиентов производится только у
                                    проверенных фермерских хозяйств и компаний,
                                    с которыми нас связывает долговременное
                                    сотрудничество.
                                </div>
                            </div>
                        </div>
                        <div className={css.contentWrapper}>
                            <div className={css.content}>
                                <img src={svg3} alt={''} className={css.img} />
                                <div>
                                    Для приготовления мороженого используются
                                    настоящие сливки и молоко высочайшего
                                    качества. Все дополнительные ингредиенты и
                                    добавки произведены из натурального,
                                    экологически чистого сырья.
                                </div>
                            </div>
                            <div className={css.content}>
                                <img src={svg4} alt={''} className={css.img} />
                                <div>
                                    Доставка нашего мороженого до заказчиков
                                    осуществляется в специальном термопаке,
                                    который не дает мороженому растаять в пути и
                                    позволяет сохранить превосходный вкус.
                                </div>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PresentSlider;
