import React from 'react';

type Props = {
  gigabytesAmount: number,
};

export const CapacitySelect: React.FC<Props> = ({ gigabytesAmount }) => {
  return (
    <button type="button" className="button-rectangle">
      {`${gigabytesAmount} GB`}
    </button>
  );
};
