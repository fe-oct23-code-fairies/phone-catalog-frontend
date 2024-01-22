import React from 'react';
import { CircleButtonWithIcon } from '../CircleButtonWithIcon';

export const Counter: React.FC = () => {
  return (
    <div className="counter">
      <CircleButtonWithIcon>
        <img
          src="images/icons/minus-grey.svg"
          alt="remove"
          className="icon"
        />
      </CircleButtonWithIcon>

      <p className="text-body">
        1
      </p>

      <CircleButtonWithIcon>
        <img
          src="images/icons/plus.svg"
          alt="add"
          className="icon"
        />
      </CircleButtonWithIcon>
    </div>
  );
};
