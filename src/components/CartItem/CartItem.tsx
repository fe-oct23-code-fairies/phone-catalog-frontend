import React from 'react';
import { ButtonWithIcon } from '../../ui/ButtonWithIcon';
import { CartItemPhoto } from '../../ui/CartItemPhoto';
import { Counter } from '../../ui/Counter';
import { Icon } from '../../ui/Icons';
import { Item } from '../../types/Item';
import { useAppContext } from '../../context/AppContext';

type Props = {
  product: Item
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const {
    addedToCartProducts,
    cartProductsAmount,
    setCartProductsAmount,
  } = useAppContext();

  const removeProduct = () => {
    const newProducts = addedToCartProducts.filter(
      addedProduct => addedProduct.id !== product.id,
    );

    const productsToSet = JSON.stringify(newProducts);
    const amountToSet = JSON.stringify(cartProductsAmount - 1);

    localStorage.setItem(
      'addedToCartProducts', productsToSet,
    );

    localStorage.setItem(
      'cartProductsAmount', amountToSet,
    );

    setCartProductsAmount(cartProductsAmount - 1);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__head">
        <ButtonWithIcon
          onClick={removeProduct}
        >
          <Icon iconName="close" />
        </ButtonWithIcon>

        <CartItemPhoto photo="item" />

        <p className="cart-item__title text-body">
          {product.name}
        </p>
      </div>

      <div className="cart-item__body">
        <Counter />

        <p className="h3">{product.priceRegular}</p>
      </div>
    </div>
  );
};
