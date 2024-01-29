import React, { useState } from 'react';
import './ColorsAndGb.scss';
import { ColorRadioButton } from '../../ui/ColorRadioButton';
import { CapacitySelect } from '../../ui/CapacitySelect';
import { Button } from '../../ui/Button';
import { AddToFavourite } from '../../ui/AddToFavourite/AddToFavourite';

const colors = ['gold', 'grey', 'brown', 'white'];
const capacities = ['128', '256', '512'];

export const ColorsAndGbVariants: React.FC = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(capacities[0]);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  return (
    <div className="container-colors-and-Gb">
      <div className="colors">
        <div className="colors__title">Available colors</div>
        <div className="colors__productId">ID: 802390</div>
      </div>

      <div className="colors__buttons">
        {colors.map(color => {
          return (
            <ColorRadioButton
              color={color}
              key={color}
              onClick={handleColorClick}
              selectedColor={selectedColor}
            />
          );
        })}
      </div>

      <div className="colors__underline" />
      <div className="capacities__title">Select capacity</div>

      <div className="capacities__buttons">
        {capacities.map(cap => {
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
        <div className="block__newPrice">$799</div>
        <div className="block__oldPrice">$1199</div>
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

      <div className="block__additional">
        <div className="block__additional__screen">
          <p className="block__additional__screen-title">Screen</p>
          <p className="block__additional__screen-value">6.5” OLED</p>
        </div>

        <div className="block__additional__resolution">
          <p className="block__additional__resolution-title">Capacity</p>
          <p className="block__additional__resolution-value">2688x1242</p>
        </div>

        <div className="block__additional__processor">
          <p className="block__additional__processor-title">processor</p>
          <p className="block__additional__processor-value">Apple A12 Bionic</p>
        </div>

        <div className="block__additional__ram">
          <p className="block__additional__ram-title">RAM</p>
          <p className="block__additional__ram-value">4 GB</p>
        </div>
      </div>

    </div>
  );
};