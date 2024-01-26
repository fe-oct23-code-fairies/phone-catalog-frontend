import { FC, useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { CircleButtonWithIcon } from '../../../ui/CircleButtonWithIcon';
import { Icon } from '../../../ui/Icons';

import { SliderSettingsPhone }
  from '../../SliderSettingsPhones/SliderSettingsPhones';

import './PhoneSection.scss';
import 'swiper/css';
import { Item } from '../../../types/Item';
import { getPhones } from '../../../api/phones';
import { CardLayout } from '../../CardLayout';

type Props = {
  title: string,
  prefixSlider: string
};

export const PhonesSection: FC<Props> = ({ title, prefixSlider }) => {
  const createPrefixSlider = prefixSlider;
  const [products, setProducts] = useState<Item[]>([]);

  useEffect(() => {
    getPhones()
      .then(setProducts);
  }, []);

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
            {products.map(
              product => (
                <SwiperSlide
                  key={product.id}
                >
                  <CardLayout product={product} />
                </SwiperSlide>
              ),
            )}
          </SliderSettingsPhone>
        </div>
      </div>
    </div>
  );
};
