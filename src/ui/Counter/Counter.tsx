import React from 'react';
import { CircleButton } from '../CircleButton';
import { Icon } from '../Icons';

export const Counter: React.FC = () => {
  const isMinusDisabled = true;

  return (
    <div className="counter">
      <CircleButton isDisabled={isMinusDisabled}>
        <Icon iconName="minus" />
      </CircleButton>

      <p className="text-body">
        1
      </p>

      <CircleButton>
        <Icon iconName="plus" />
      </CircleButton>
    </div>
  );
};
