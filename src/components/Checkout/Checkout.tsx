import React from 'react';
import { Button } from '../../ui/Button';
import { useCartContext } from '../../context/CartContext';

export const Checkout: React.FC = () => {
  const { setIsCheckoutSuccessful } = useCartContext();

  return (
    <div className="checkout">
      <div className="checkout__head">
        <p className="h2">$2657</p>

        <p className="checkout__description text-body">Total for 3 items</p>
      </div>

      <hr className="checkout__hr" />

      <Button
        to="/checkout"
        btnClass="checkout__button"
        onClick={() => setIsCheckoutSuccessful(true)}
      >
        Checkout
      </Button>
    </div>
  );
};
