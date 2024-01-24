import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { AddToFavourite } from '../../ui/AddToFavourite/AddToFavourite';

interface Props {
  phoneName: string;
  phonePrice: number;
  phoneScreen: string;
  phoneCapacity: string;
  phoneRam: string;
}

export const CardLayout: React.FC<Props> = ({
  phoneName,
  phonePrice,
  phoneScreen,
  phoneCapacity,
  phoneRam,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img className="card__img" src="images/item.png" alt="Iphone IMG" />
      </div>

      <h2 className="card__title">{phoneName}</h2>

      <div className="card__price">{phonePrice}</div>

      <div className="card__line" />

      <div className="card__additional">
        <div className="card__additional__screen">
          <p className="card__additional__screen-title">Screen</p>
          <p className="card__additional__screen-value">{phoneScreen}</p>
        </div>

        <div className="card__additional__capacity">
          <p className="card__additional__capacity-title">Capacity</p>
          <p className="card__additional__capacity-value">{phoneCapacity}</p>
        </div>

        <div className="card__additional__ram">
          <p className="card__additional__ram-title">RAM</p>
          <p className="card__additional__ram-value">{phoneRam}</p>
        </div>
      </div>

      <div className="card__buttons">
        <Button
          to=""
          btnClass="card__add"
          isActive={isAdded}
          onClick={() => setIsAdded((prev) => !prev)}
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
