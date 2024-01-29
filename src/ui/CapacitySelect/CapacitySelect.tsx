import React from 'react';
import cn from 'classnames';

type Props = {
  gigabytesAmount: string;
  onClick: (capacity: string) => void;
  selectedCapacity: string;
};

export const CapacitySelect: React.FC<Props> = ({
  gigabytesAmount, onClick, selectedCapacity,
}) => {
  const isSelected = gigabytesAmount === selectedCapacity;

  return (
    <button
      type="button"
      onClick={() => onClick(gigabytesAmount)}
      className={cn('button-rectangle', { selectedCapacity: isSelected })}
    >
      {`${gigabytesAmount}`}
    </button>
  );
};
