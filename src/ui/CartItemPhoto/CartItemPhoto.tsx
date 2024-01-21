import React from 'react';

type Props = {
  photo: string,
};

export const CartItemPhoto: React.FC<Props> = ({ photo }) => {
  return (
    <img
      src={`images/${photo}.png`}
      alt=""
      className="cart-item__photo"
    />
  );
};
