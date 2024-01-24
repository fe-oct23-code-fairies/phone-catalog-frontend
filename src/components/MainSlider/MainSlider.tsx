import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { Icon } from '../../ui/Icons';

import 'swiper/css';
import 'swiper/css/free-mode';
import './MainSlider.scss';

export const MainSlider: FC = () => {
  return (
    <div className="swiper-grid-container">
      <div className="swiper-button-prev">
        <div className="wrapper-slider-icon">
          <Icon iconName="arrow-left" />
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(_index: number, className: string) {
            return `<span class="${className} custom-dot"></span>`;
          },
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide className="custom-slide">
          <a href="/#" aria-label="banner" className="slide-for-tablet">
            <img
              src="images/banner-tablet.png"
              alt="banner"
            />
          </a>
          <a href="/#" aria-label="banner" className="slide-for-mobile">
            <img
              src="images/banner-phone.png"
              alt="banner"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <a href="/#" aria-label="banner" className="slide-for-tablet">
            <img
              src="images/banner-tablet.png"
              alt="banner"
            />
          </a>
          <a href="/#" aria-label="banner" className="slide-for-mobile">
            <img
              src="images/banner-phone.png"
              alt="banner"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <a href="/#" aria-label="banner" className="slide-for-tablet">
            <img
              src="images/banner-tablet.png"
              alt="banner"
            />
          </a>
          <a href="/#" aria-label="banner" className="slide-for-mobile">
            <img
              src="images/banner-phone.png"
              alt="banner"
            />
          </a>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next">
        <div className="wrapper-slider-icon">
          <Icon iconName="arrow-right" />
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
  );
};
