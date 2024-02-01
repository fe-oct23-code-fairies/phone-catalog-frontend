import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { AddToFavourite } from '../../ui/AddToFavourite/AddToFavourite';
import { useAppContext } from '../../context/AppContext';
import { Product } from '../../types/Product';
import { BASE_URL } from '../../utils/fetchClient';

type Props = {
  product: Product;
};

export const CardLayout: React.FC<Props> = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const location = useLocation();

  const { pathname, search } = location;

  const {
    addProductToCart,
    addProductToFavorites,
    parsedFavorites,
    areFavorites,
    setAreFavorites,
    addedToFavoriteProducts,
    setAddedToFavoriteProducts,
  } = useAppContext();

  useEffect(() => setAreFavorites(parsedFavorites), [setAreFavorites]);

  const addToCart = (productToAdd: Product) => {
    addProductToCart(productToAdd);

    setIsAdded(true);

    setTimeout(() => setIsAdded(false), 500);
  };

  const addToFavorites = (productToAdd: Product) => {
    addProductToFavorites(productToAdd);

    const productAlreadyInFavorites = areFavorites.includes(product.id);

    if (productAlreadyInFavorites) {
      const favoritesToSet = parsedFavorites.filter(
        favorite => favorite !== product.id,
      );

      const changedFavorites = addedToFavoriteProducts.filter(
        favoriteProduct => favoriteProduct.id !== productToAdd.id,
      );

      setAddedToFavoriteProducts(changedFavorites);

      localStorage.setItem('favorites', JSON.stringify(favoritesToSet));
      setAreFavorites(favoritesToSet);

      return;
    }

    const newFavorites = [...parsedFavorites, product.id];

    localStorage.setItem('favorites', JSON.stringify(newFavorites));

    setAreFavorites(newFavorites);
  };

  return (
    <div className="card">
      <div className="card__img-wrapper">
        <Link to={`/${product.category}/${product.itemId}`}>
          <img
            className="card__img"
            src={`${BASE_URL}/static/${product.image}`}
            alt="Iphone IMG"
          />
        </Link>
      </div>

      <Link to={`/${product.category}/${product.itemId}`}>
        <h2 className="card__title">{product.name}</h2>
      </Link>

      <div className="card__price">
        <p>{`$${product.price}`}</p>
        <p className="card__price--old">{`$${product.fullPrice}`}</p>
      </div>

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
          to={pathname + search}
          btnClass="card__add"
          isActive={isAdded}
          onClick={() => addToCart(product)}
        >
          {isAdded ? 'Added' : 'Add to cart'}
        </Button>
        <AddToFavourite
          isFavorite={areFavorites.includes(product.id)}
          onClick={() => addToFavorites(product)}
        />
      </div>
    </div>
  );
};
