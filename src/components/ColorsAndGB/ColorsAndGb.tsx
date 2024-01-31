import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Item } from '../../types/Item';
import { AddToFavourite } from '../../ui/AddToFavourite/AddToFavourite';
import { Button } from '../../ui/Button';
import { CapacitySelect } from '../../ui/CapacitySelect';
import { ColorRadioButton } from '../../ui/ColorRadioButton';
import './ColorsAndGb.scss';
import { Product } from '../../types/Product';
import { getDetailed } from '../../api/detailedProducts';

type Props = {
  product: Item,
  nonDetailedProduct: Product,
  refreshInfo: (itemId: string) => Promise<void>,
  setError: (errorMsg: string) => void,
};

export const ColorsAndGbVariants: React.FC<Props> = ({
  product,
  nonDetailedProduct,
  refreshInfo,
  setError,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [availableColors] = useState<string[]>(product.coloursAvailable);
  const [availableCapacity] = useState<string[]>(product.capacityAvailable);

  const [selectedColor, setSelectedColor] = useState(
    product.colour,
  );
  const [selectedCapacity, setSelectedCapacity] = useState(
    product.capacity,
  );

  const {
    addProductToCart,
    addProductToFavorites,
    parsedFavorites,
    areFavorites,
    setAreFavorites,
    addedToFavoriteProducts,
    setAddedToFavoriteProducts,
  } = useAppContext();

  useEffect(() => setAreFavorites(parsedFavorites),
    [setAreFavorites]);

  const findTheNewOne = (color: string, capacity: string) => {
    getDetailed()
      .then(detailedProds => {
        const sameNamespaceProds = detailedProds.filter(
          detailedProd => detailedProd.namespaceId === product.namespaceId,
        );

        const newProd = sameNamespaceProds.find(
          namespaceProd => namespaceProd.colour === color
            && namespaceProd.capacity === capacity,
        );

        refreshInfo(newProd?.id || '');
      })
      .catch(() => setError('Could not find the selected product!'));
  };

  const addToCart = (productToAdd: Product) => {
    addProductToCart(productToAdd);

    setIsAdded(true);

    setTimeout(() => setIsAdded(false), 500);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    findTheNewOne(color, selectedCapacity);
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
    findTheNewOne(selectedColor, capacity);
  };

  const addToFavorites = () => {
    addProductToFavorites(nonDetailedProduct);

    const productAlreadyInFavorites = areFavorites.includes(
      nonDetailedProduct.id,
    );

    if (productAlreadyInFavorites) {
      const favoritesToSet = parsedFavorites.filter(
        favorite => favorite !== nonDetailedProduct.id,
      );

      const changedFavorites = addedToFavoriteProducts.filter(
        favoriteProduct => favoriteProduct.id !== nonDetailedProduct.id,
      );

      setAddedToFavoriteProducts(changedFavorites);

      localStorage.setItem('favorites', JSON.stringify(favoritesToSet));
      setAreFavorites(favoritesToSet);

      return;
    }

    const newFavorites = [...parsedFavorites, nonDetailedProduct.id];

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
          onClick={() => addToCart(nonDetailedProduct)}
        >
          {isAdded ? 'Added' : 'Add to cart'}
        </Button>
        <AddToFavourite
          isFavorite={areFavorites.includes(nonDetailedProduct.id)}
          onClick={addToFavorites}
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
