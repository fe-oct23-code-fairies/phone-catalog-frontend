import React from 'react';
import cn from 'classnames';

type Props = {
  color: string;
  onClick: (color: string) => void;
  selectedColor: string;
};

export const ColorRadioButton: React.FC<Props> = ({
  color, onClick, selectedColor,
}) => {
  const isSelected = color === selectedColor;

  return (
    <input
      type="radio"
      onClick={() => onClick(color)}
      className={cn('button-radio', `button-radio--${color.replaceAll(' ', '')}`, {
        selectedColor: isSelected,
      })}
    />
  );
};
