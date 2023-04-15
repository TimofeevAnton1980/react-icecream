import React from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Slide from "./Slide";
// import css from "./styles.module.css"
import * as css from "./styles.module.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import slideImages from "./data-slider";

const StickySlider = () => {
  const params = {
    slidesPerView: 1,
    modules: [Navigation, Pagination, Autoplay],
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    speed: 800,
    loop: false,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  };

  return (
    <div className={css.swiperContainer}>
      <Swiper {...params}>
        {slideImages.map((item, idx) => (
          <div key={idx}>
            {/* добавляем слайд */}
            <Slide
              picture={item.picture}
              pictureMin={item.pictureMin}
              basket={item.basket}
            >
              {item.title}
            </Slide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default StickySlider;
