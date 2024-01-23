import React, { useState } from 'react';
import { Icon } from '../Icons';
import { CircleButtonWithIcon } from '../CircleButtonWithIcon';

export const Counter: React.FC = () => {
  const MAX_VALUE = 12;

  const [counter, setCounter] = useState(1);
  const isMinusDisabled = counter === 1;
  const isPlusDisabled = counter === MAX_VALUE;

  const onClickMinus = () => setCounter((prev) => prev - 1);
  const onClickPlus = () => setCounter((prev) => prev + 1);

  return (
    <div className="counter">
      <CircleButtonWithIcon
        additionalClass={isMinusDisabled ? 'button-circle-icon--disabled' : ''}
        onClick={onClickMinus}
      >
        <Icon iconName="minus" />
      </CircleButtonWithIcon>

      <p className="text-body counter__number">{counter}</p>

      <CircleButtonWithIcon
        additionalClass={isPlusDisabled ? 'button-circle-icon--disabled' : ''}
        onClick={onClickPlus}
      >
        <Icon iconName="plus" />
      </CircleButtonWithIcon>
    </div>
  );
};
