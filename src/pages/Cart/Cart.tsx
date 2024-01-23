import React from 'react';
import { CartItem } from '../../components/CartItem';
import { Checkout } from '../../components/Checkout';

export const Cart: React.FC = () => {
  return (
    <div className="cart">
      <div className="cart__products">
        <CartItem />
      </div>

      <Checkout />
    </div>
  );
};
