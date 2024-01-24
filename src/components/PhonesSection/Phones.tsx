import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { CardLayout } from '../CardLayout';

import { SliderSettingsPhone }
  from '../SliderSettingsPhones/SliderSettingsPhones';

import './PhoneSection.scss';
import 'swiper/css';
import { CircleButtonWithIcon } from '../../ui/CircleButtonWithIcon';
import { Icon } from '../../ui/Icons';

type Props = {
  title: string,
  prefixSlider: string
};

export const PhonesSection: FC<Props> = ({ title, prefixSlider }) => {
  const createPrefixSlider = prefixSlider;

  return (
    <div className="phones-wrapper">
      <h2 className="h2">{title}</h2>

      <div className="phones-slider-wrapper">
        <div className="wrapper-card">
          <div className={`${createPrefixSlider}-button-prev arrow-absolute-left`}>
            <CircleButtonWithIcon>
              <Icon iconName="arrow-left" />
            </CircleButtonWithIcon>
          </div>
          <div className={`${createPrefixSlider}-button-next arrow-absolute-right`}>
            <CircleButtonWithIcon>
              <Icon iconName="arrow-right" />
            </CircleButtonWithIcon>
          </div>
          <SliderSettingsPhone sliderPrefixArrow={createPrefixSlider}>
            <SwiperSlide>
              <CardLayout />
            </SwiperSlide>
            <SwiperSlide>
              <CardLayout />
            </SwiperSlide>
            <SwiperSlide>
              <CardLayout />
            </SwiperSlide>
            <SwiperSlide>
              <CardLayout />
            </SwiperSlide>
            <SwiperSlide>
              <CardLayout />
            </SwiperSlide>
          </SliderSettingsPhone>
        </div>
      </div>
    </div>
  );
};
