import React, { useState } from 'react';
import './ColorsAndGb.scss';
import { ColorRadioButton } from '../../ui/ColorRadioButton';
import { CapacitySelect } from '../../ui/CapacitySelect';
import { Button } from '../../ui/Button';
import { AddToFavourite } from '../../ui/AddToFavourite/AddToFavourite';
import { Item } from '../../types/Item';

// const colors = ['gold', 'grey', 'brown', 'white'];
// const capacities = ['128', '256', '512'];

type Props = {
  colors: string[],
  availableGBs: string[],
  phone: Item,
};

export const ColorsAndGbVariants: React.FC<Props> = ({
  colors, availableGBs, phone,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [availableColors] = useState<string[]>(colors);
  const [availableCapacity] = useState<string[]>(availableGBs);

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

  return (
    <div className="container-colors-and-Gb">
      <div className="colors">
        <div className="colors__title">Available colors</div>
        <div className="colors__productId">{phone.namespaceId}</div>
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
        <div className="block__newPrice">{`$${phone.priceDiscount}`}</div>
        <div className="block__oldPrice">{phone.priceRegular}</div>
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
          <p className="block__additional__screen-value">{phone.screen}</p>
        </div>

        <div className="block__additional__resolution">
          <p className="block__additional__resolution-title">Capacity</p>
          <p className="block__additional__resolution-value">
            {phone.capacity}
          </p>
        </div>

        <div className="block__additional__processor">
          <p className="block__additional__processor-title">processor</p>
          <p className="block__additional__processor-value">
            {phone.processor}
          </p>
        </div>

        <div className="block__additional__ram">
          <p className="block__additional__ram-title">RAM</p>
          <p className="block__additional__ram-value">{phone.ram}</p>
        </div>
      </div>
    </div>
  );
};
