import React, { useEffect } from 'react';
import { CartItem } from '../../components/CartItem';
import { Checkout } from '../../components/Checkout';
import { useCartContext } from '../../context/CartContext';
import { Popup } from '../../components/Popup/Popup';
import { useAppContext } from '../../context/AppContext';

export const Cart: React.FC = () => {
  const { isCheckoutSuccessful } = useCartContext();
  const {
    addedToCartProducts,
    setAddedToCartProducts,
    parsedCartProducts,
  } = useAppContext();

  useEffect(() => {
    setAddedToCartProducts(parsedCartProducts);
  });

  const cartIsntEmpty = addedToCartProducts && addedToCartProducts.length > 0;

  return (
    <div className="cart">
      {cartIsntEmpty
        ? (
          <div className="cart__products">
            {addedToCartProducts.map(
              (addedProduct) => (
                <CartItem
                  key={addedProduct.id}
                  product={addedProduct}
                />
              ),
            )}
          </div>
        ) : (
          <p className="cart__no-products-text">
            The are no products in cart
          </p>
        )}

      {cartIsntEmpty && <Checkout />}

      {isCheckoutSuccessful && <Popup />}
    </div>
  );
};
