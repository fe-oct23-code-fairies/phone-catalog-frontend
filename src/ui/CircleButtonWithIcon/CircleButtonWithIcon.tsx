import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const CircleButtonWithIcon: React.FC<Props> = ({
  children,
  onClick = () => {},
  disabled,
}) => {
  return (
    <button
      type="button"
      className="button-circle-icon"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const CircleButton: React.FC<Props> = ({
  children,
  disabled,
  onClick = () => {},
}) => {
  return (
    <button
      type="button"
      className="button-circle"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
