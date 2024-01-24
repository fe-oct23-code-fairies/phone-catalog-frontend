import { FC, ReactNode } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';

type Props = {
  children: ReactNode,
  sliderPrefixArrow: string,
};

export const SliderSettingsPhone: FC<Props> = ({
  sliderPrefixArrow, children,
}) => {
  const params = {
    spaceBetween: '20',
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: `.${sliderPrefixArrow}-button-next`,
      prevEl: `.${sliderPrefixArrow}-button-prev`,
    },
    modules: [Navigation],
  };

  // eslint-disable-next-line no-return-assign, no-sequences
  return <Swiper slidesPerView="auto" {...params}>{children}</Swiper>;
};
