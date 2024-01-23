import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import './MainSlider.scss';

import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { CircleButtonWithIcon } from '../../ui/CircleButtonWithIcon';

export const MainSlider: FC = () => {
  return (
    <div className="swiper-grid-container">
      <div className="swiper-button-prev">
        <CircleButtonWithIcon>
          <Icon iconName="arrow-left" />
        </CircleButtonWithIcon>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
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
              // eslint-disable-next-line global-require
              src={require('../../images/banner-tablet.png')}
              alt="banner"
            />
          </a>
          <a href="/#" aria-label="banner" className="slide-for-mobile">
            <img
              // eslint-disable-next-line global-require
              src={require('../../images/banner-phone.png')}
              alt="banner"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <a href="/#" aria-label="banner" className="slide-for-tablet">
            <img
              // eslint-disable-next-line global-require
              src={require('../../images/banner-tablet.png')}
              alt="banner"
            />
          </a>
          <a href="/#" aria-label="banner" className="slide-for-mobile">
            <img
              // eslint-disable-next-line global-require
              src={require('../../images/banner-phone.png')}
              alt="banner"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <a href="/#" aria-label="banner" className="slide-for-tablet">
            <img
              // eslint-disable-next-line global-require
              src={require('../../images/banner-tablet.png')}
              alt="banner"
            />
          </a>
          <a href="/#" aria-label="banner" className="slide-for-mobile">
            <img
              // eslint-disable-next-line global-require
              src={require('../../images/banner-phone.png')}
              alt="banner"
            />
          </a>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next" />
      <div className="swiper-pagination" />
    </div>
  );
};
