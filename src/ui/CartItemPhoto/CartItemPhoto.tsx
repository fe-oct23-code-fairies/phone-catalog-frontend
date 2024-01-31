import React from 'react';
import { BASE_URL } from '../../utils/fetchClient';

type Props = {
  photo: string;
};

export const CartItemPhoto: React.FC<Props> = ({ photo }) => {
  return (
    <img src={`${BASE_URL}/static/${photo}`} alt="" className="cart-item__photo" />
  );
};
