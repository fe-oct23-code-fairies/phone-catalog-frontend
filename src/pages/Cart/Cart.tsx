import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../components/CartItem';
import { Checkout } from '../../components/Checkout';
import { useCartContext } from '../../context/CartContext';
import { Popup } from '../../components/Popup/Popup';
import { useAppContext } from '../../context/AppContext';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const Cart: React.FC = () => {
  const { isCheckoutSuccessful } = useCartContext();
  const { parsedCartProducts } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('login');

    if (!user) {
      navigate('/auth/signin', { replace: true });
    }
  }, [navigate]);

  const cartIsntEmpty = parsedCartProducts && parsedCartProducts.length > 0;

  return (
    <div className="cart">
      <Breadcrumbs />
      {cartIsntEmpty ? (
        <div className="cart__products">
          {parsedCartProducts.map(addedProduct => (
            <CartItem
              key={addedProduct.id}
              product={addedProduct}
            />
          ))}
        </div>
      ) : (
        <p className="cart__no-products-text">The are no products in cart</p>
      )}

      {cartIsntEmpty && <Checkout />}

      {isCheckoutSuccessful && <Popup />}
    </div>
  );
};
