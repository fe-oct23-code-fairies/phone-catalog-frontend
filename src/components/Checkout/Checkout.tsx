import React from 'react';
import { Button } from '../../ui/Button';

export const Checkout: React.FC = () => {
  return (
    <div className="checkout">
      <div className="checkout__head">
        <p className="h2">$2657</p>

        <p className="checkout__description text-body">Total for 3 items</p>
      </div>

      <hr className="checkout__hr" />

      <Button to="/" btnClass="checkout__button">
        Checkout
      </Button>
    </div>
  );
};
