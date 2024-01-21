import React from 'react';
import { CircleButton } from '../CircleButton';

export const Counter: React.FC = () => {
  return (
    <div className="counter">
      <CircleButton>
        <img
          src="images/icons/minus-grey.svg"
          alt="remove"
          className="icon"
        />
      </CircleButton>

      <p className="text-body">
        1
      </p>

      <CircleButton>
        <img
          src="images/icons/plus.svg"
          alt="add"
          className="icon"
        />
      </CircleButton>
    </div>
  );
};
