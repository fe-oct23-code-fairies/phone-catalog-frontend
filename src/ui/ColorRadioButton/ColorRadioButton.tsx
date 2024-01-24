import React from 'react';

type Props = {
  color: string;
};

export const ColorRadioButton: React.FC<Props> = ({ color }) => {
  return (
    <input type="radio" className={`button-radio button-radio--${color}`} />
  );
};
