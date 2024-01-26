import React, { useEffect } from 'react';
import { Button } from '../../ui/Button';
import { useCartContext } from '../../context/CartContext';
import { useAppContext } from '../../context/AppContext';

export const Checkout: React.FC = () => {
  const { setIsCheckoutSuccessful } = useCartContext();
  const { totalPrice, setTotalPrice } = useCartContext();

  const { parsedCartProducts } = useAppContext();

  useEffect(() => {
    const totalPurchasePrice = parsedCartProducts.reduce(
      (accumulator, currentItem) => accumulator
        + (currentItem.priceRegular * currentItem.count),
      0,
    );

    setTotalPrice(totalPurchasePrice);
  }, [parsedCartProducts, setTotalPrice]);

  const itemsAmount = parsedCartProducts.length;

  return (
    <div className="checkout">
      <div className="checkout__head">
        <p className="h2">{`$${totalPrice}`}</p>

        <p className="checkout__description text-body">
          {`Total for ${itemsAmount} items`}
        </p>
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
