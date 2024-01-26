import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { AddToFavourite } from '../../ui/AddToFavourite/AddToFavourite';
import { Item } from '../../types/Item';
import { useAppContext } from '../../context/AppContext';

type Props = {
  product: Item
};

export const CardLayout: React.FC<Props> = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    parsedCartProductsAmount,
    parsedCartProducts,
    setCartProductsAmount,
  } = useAppContext();

  const addProduct = () => {
    setIsAdded(true);

    setTimeout(() => setIsAdded(false), 500);

    const isAlreadyInCart = parsedCartProducts.find(
      productToFind => productToFind.id === product.id,
    );

    if (isAlreadyInCart) {
      const productTochangeIndex = parsedCartProducts.findIndex(
        productToFind => productToFind.id === product.id,
      );

      parsedCartProducts[productTochangeIndex] = {
        ...parsedCartProducts[productTochangeIndex],
        count: parsedCartProducts[productTochangeIndex].count + 1,
      };

      const productsToSet = JSON.stringify(parsedCartProducts);

      localStorage.setItem('addedToCartProducts', productsToSet);

      return;
    }

    const updatedItems = [...parsedCartProducts, { ...product, count: 1 }];
    const updatedCartProductsAmount = parsedCartProductsAmount + 1;

    localStorage
      .setItem('addedToCartProducts', JSON.stringify(updatedItems));
    localStorage
      .setItem(
        'cartProductsAmount', JSON.stringify(updatedCartProductsAmount),
      );
    setCartProductsAmount(updatedCartProductsAmount);
  };

  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img className="card__img" src="images/item.png" alt="Iphone IMG" />
      </div>

      <h2 className="card__title">{product.name}</h2>

      <div className="card__price">{`$${product.priceRegular}`}</div>

      <div className="card__line" />

      <div className="card__additional">
        <div className="card__additional__screen">
          <p className="card__additional__screen-title">Screen</p>
          <p className="card__additional__screen-value">{product.screen}</p>
        </div>

        <div className="card__additional__capacity">
          <p className="card__additional__capacity-title">Capacity</p>
          <p className="card__additional__capacity-value">{product.capacity}</p>
        </div>

        <div className="card__additional__ram">
          <p className="card__additional__ram-title">RAM</p>
          <p className="card__additional__ram-value">{product.ram}</p>
        </div>
      </div>

      <div className="card__buttons">
        <Button
          to=""
          btnClass="card__add"
          isActive={isAdded}
          onClick={addProduct}
        >
          {isAdded ? 'Added' : 'Add to cart'}
        </Button>
        <AddToFavourite
          isFavorite={isFavorite}
          onClick={() => setIsFavorite((prev) => !prev)}
        />
      </div>
    </div>
  );
};
