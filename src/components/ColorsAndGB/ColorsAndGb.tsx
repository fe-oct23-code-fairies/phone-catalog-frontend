import React, { useEffect, useState } from 'react';
import './ColorsAndGb.scss';
import { ColorRadioButton } from '../../ui/ColorRadioButton';
import { CapacitySelect } from '../../ui/CapacitySelect';
import { Button } from '../../ui/Button';
import { AddToFavourite } from '../../ui/AddToFavourite/AddToFavourite';
import { Item } from '../../types/Item';
import { useAppContext } from '../../context/AppContext';
import { Product } from '../../types/Product';
import { getProducts } from '../../api/products';

type Props = {
  colors: string[],
  availableGBs: string[],
  product: Item,
};

export const ColorsAndGbVariants: React.FC<Props> = ({
  colors, availableGBs, product,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [availableColors] = useState<string[]>(colors);
  const [availableCapacity] = useState<string[]>(availableGBs);

  const productInArray = products.find(
    foundProduct => foundProduct.itemId === product.id,
  ) || products[0];

  const [selectedColor, setSelectedColor] = useState<string | null>(
    availableColors[0],
  );
  const [selectedCapacity, setSelectedCapacity] = useState(
    availableCapacity[0],
  );

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  const [isAdded, setIsAdded] = useState(false);

  const {
    addProductToCart,
    addProductToFavorites,
    parsedFavorites,
    areFavorites,
    setAreFavorites,
    addedToFavoriteProducts,
    setAddedToFavoriteProducts,
  } = useAppContext();

  useEffect(() => {
    setAreFavorites(parsedFavorites);
    getProducts().then(setProducts);
  },
  [setAreFavorites]);

  const addToCart = (productToAdd: Product) => {
    addProductToCart(productToAdd);

    setIsAdded(true);

    setTimeout(() => setIsAdded(false), 500);
  };

  const addToFavorites = (productToAdd: Product) => {
    addProductToFavorites(productToAdd);

    const productAlreadyInFavorites = productInArray
      ? areFavorites.includes(productInArray.id)
      : false;

    if (productAlreadyInFavorites) {
      const favoritesToSet = parsedFavorites.filter(favorite => {
        const productToCompare = products.find(
          foundProduct => foundProduct.id === favorite,
        ) || products[0];

        return productToCompare?.itemId !== product.id;
      });

      const changedFavorites = addedToFavoriteProducts.filter(
        favoriteProduct => favoriteProduct.id !== productToAdd.id,
      );

      setAddedToFavoriteProducts(changedFavorites);

      localStorage.setItem('favorites', JSON.stringify(favoritesToSet));
      setAreFavorites(favoritesToSet);

      return;
    }

    const newFavorites = productInArray
      ? [...parsedFavorites, productInArray.id]
      : parsedFavorites;

    localStorage.setItem('favorites', JSON.stringify(newFavorites));

    setAreFavorites(newFavorites);
  };

  return (
    <div className="container-colors-and-Gb">
      <div className="colors">
        <div className="colors__title">Available colors</div>
        <div className="colors__productId">{product.namespaceId}</div>
      </div>

      <div className="colors__buttons">
        {availableColors.map(color => {
          return (
            <ColorRadioButton
              color={color}
              key={color}
              onClick={handleColorClick}
              selectedColor={selectedColor || ''}
            />
          );
        })}
      </div>

      <div className="colors__underline" />
      <div className="capacities__title">Select capacity</div>

      <div className="capacities__buttons">
        {availableCapacity.map(cap => {
          return (
            <CapacitySelect
              key={cap}
              gigabytesAmount={cap}
              onClick={handleCapacityClick}
              selectedCapacity={selectedCapacity}
            />
          );
        })}
      </div>

      <div className="colors__underline" />

      <div className="block">
        <div className="block__newPrice">{`$${product.priceDiscount}`}</div>
        <div className="block__oldPrice">{product.priceRegular}</div>
      </div>

      <div className="card__buttons">
        <Button
          to=""
          btnClass="card__add"
          isActive={isAdded}
          onClick={() => addToCart(productInArray)}
        >
          {isAdded ? 'Added' : 'Add to cart'}
        </Button>
        <AddToFavourite
          isFavorite={areFavorites.includes(productInArray?.id)}
          onClick={() => addToFavorites(productInArray)}
        />
      </div>

      <div className="block__additional">
        <div className="block__additional__screen">
          <p className="block__additional__screen-title">Screen</p>
          <p className="block__additional__screen-value">{product.screen}</p>
        </div>

        <div className="block__additional__resolution">
          <p className="block__additional__resolution-title">Capacity</p>
          <p className="block__additional__resolution-value">
            {product.capacity}
          </p>
        </div>

        <div className="block__additional__processor">
          <p className="block__additional__processor-title">processor</p>
          <p className="block__additional__processor-value">
            {product.processor}
          </p>
        </div>

        <div className="block__additional__ram">
          <p className="block__additional__ram-title">RAM</p>
          <p className="block__additional__ram-value">{product.ram}</p>
        </div>
      </div>
    </div>
  );
};
