import React, { useEffect, useState } from 'react';
import { Icon } from '../Icons';
import { CircleButtonWithIcon } from '../CircleButtonWithIcon';
import { CartProduct } from '../../types/CartProduct';
import { useAppContext } from '../../context/AppContext';
import { useCartContext } from '../../context/CartContext';

type Props = {
  product: CartProduct
};

export const Counter: React.FC<Props> = ({ product }) => {
  const MAX_VALUE = 12;

  const { count, id } = product;
  const { addedToCartProducts } = useAppContext();
  const { setTotalPrice, totalPrice } = useCartContext();

  const [counter, setCounter] = useState(1);
  const isMinusDisabled = counter === 1;
  const isPlusDisabled = counter === MAX_VALUE;

  useEffect(() => setCounter(count), [count]);

  const productTochangeIndex = addedToCartProducts.findIndex(
    productToFind => productToFind.id === id,
  );

  const increaseCount = () => {
    setCounter(prev => prev + 1);

    const updatedPrice = totalPrice + product.fullPrice;

    setTotalPrice(updatedPrice);

    addedToCartProducts[productTochangeIndex] = {
      ...addedToCartProducts[productTochangeIndex],
      count: counter + 1,
    };

    const productsToSet = JSON.stringify(addedToCartProducts);

    localStorage.setItem('addedToCartProducts', productsToSet);
  };

  const decreaseCount = () => {
    setCounter(prev => prev - 1);

    const updatedPrice = totalPrice - product.fullPrice;

    setTotalPrice(updatedPrice);

    addedToCartProducts[productTochangeIndex] = {
      ...addedToCartProducts[productTochangeIndex],
      count: counter - 1,
    };

    const productsToSet = JSON.stringify(addedToCartProducts);

    localStorage.setItem('addedToCartProducts', productsToSet);
  };

  return (
    <div className="counter">
      <CircleButtonWithIcon
        additionalClass={isMinusDisabled ? 'button-circle-icon--disabled' : ''}
        onClick={decreaseCount}
      >
        <Icon iconName="minus" />
      </CircleButtonWithIcon>

      <p className="text-body counter__number">{counter}</p>

      <CircleButtonWithIcon
        additionalClass={isPlusDisabled ? 'button-circle-icon--disabled' : ''}
        onClick={increaseCount}
      >
        <Icon iconName="plus" />
      </CircleButtonWithIcon>
    </div>
  );
};
