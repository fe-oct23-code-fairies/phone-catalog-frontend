import React, { useEffect } from 'react';
import { Button } from '../../ui/Button';
import { useCartContext } from '../../context/CartContext';
import { useAppContext } from '../../context/AppContext';

export const Checkout: React.FC = () => {
  const { setIsCheckoutSuccessful } = useCartContext();
  const { totalPrice, setTotalPrice } = useCartContext();
  const { setAddedToCartProducts } = useAppContext();

  const { parsedCartProducts } = useAppContext();

  useEffect(() => {
    const totalPurchasePrice = parsedCartProducts.reduce(
      (accumulator, currentItem) => accumulator
        + (currentItem.fullPrice * currentItem.count),
      0,
    );

    setTotalPrice(totalPurchasePrice);
  }, []);

  const clearProductsFromCart = () => {
    setAddedToCartProducts([]);
    localStorage.removeItem('addedToCartProducts');
    localStorage.removeItem('cartProductsAmount');
    setIsCheckoutSuccessful(true);
  };

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
        onClick={clearProductsFromCart}
      >
        Checkout
      </Button>
    </div>
  );
};
