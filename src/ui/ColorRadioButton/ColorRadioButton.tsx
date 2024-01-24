import React from 'react';

type Props = {
  color: string;
  onChange: (color: string) => void;
};

export const ColorRadioButton: React.FC<Props> = ({ color }) => {
  return (
    <input type="radio" className={`button-radio button-radio--${color}`} />
  );
};
