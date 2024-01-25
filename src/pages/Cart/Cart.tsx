import React from 'react';
import { CartItem } from '../../components/CartItem';
import { Checkout } from '../../components/Checkout';
import { useCartContext } from '../../context/CartContext';
import { Popup } from '../../components/Popup/Popup';

export const Cart: React.FC = () => {
  const { isCheckoutSuccessful } = useCartContext();

  return (
    <div className="cart">
      <div className="cart__products">
        <CartItem />
      </div>

      <Checkout />

      {isCheckoutSuccessful && <Popup />}
    </div>
  );
};
