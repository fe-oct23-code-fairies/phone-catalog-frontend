import React from 'react';
import { ButtonWithIcon } from '../../ui/ButtonWithIcon';
import { CartItemPhoto } from '../../ui/CartItemPhoto';
import { Counter } from '../../ui/Counter';

export const CartItem: React.FC = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__head">
        <ButtonWithIcon>
          <img
            src="images/icons/delete.svg"
            alt="delete product from cart"
            className="icon"
          />
        </ButtonWithIcon>

        <CartItemPhoto photo="item" />

        <p className="cart-item__title text-body">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </p>
      </div>

      <div className="cart-item__body">
        <Counter />

        <p className="h3">
          $1099
        </p>
      </div>
    </div>
  );
};
