import { FC, useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { CircleButtonWithIcon } from '../../../ui/CircleButtonWithIcon';
import { Icon } from '../../../ui/Icons';
import { CardLayout } from '../../CardLayout';
import { SliderSettingsPhone } from '../../SliderSettingsPhones/SliderSettingsPhones';
import 'swiper/css';
import { Item } from '../../../types/Item';
import { getPhones } from '../../../api/phones';
import { CardLayout } from '../../CardLayout';
import './PhoneSection.scss';

type Props = {
  title: string;
  prefixSlider: string;
};

const TEST_PRODUCT: Item = {
  id: 'apple-iphone-11-128gb-black',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'black',
  images: [
    'img/phones/apple-iphone-11/black/00.webp',
    'img/phones/apple-iphone-11/black/01.webp',
    'img/phones/apple-iphone-11/black/02.webp',
    'img/phones/apple-iphone-11/black/03.webp',
    'img/phones/apple-iphone-11/black/04.webp',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
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
