import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  additionalClass?: string;
};

export const CircleButtonWithIcon: React.FC<Props> = ({
  children,
  onClick = () => {},
  additionalClass,
}) => {
  return (
    <button
      type="button"
      className={`button-circle-icon ${additionalClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const CircleButton: React.FC<Props> = ({
  children,
  onClick = () => {},
  additionalClass,
}) => {
  return (
    <button
      type="button"
      className={`button-circle ${additionalClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
