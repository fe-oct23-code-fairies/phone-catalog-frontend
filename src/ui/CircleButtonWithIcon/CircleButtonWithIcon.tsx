import React from 'react';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

export const CircleButtonWithIcon: React.FC<Props> = ({
  children,
  disabled,
}) => {
  return (
    <button type="button" disabled={disabled} className="button-circle-icon">
      {children}
    </button>
  );
};

export const CircleButton: React.FC<Props> = ({ children, disabled }) => {
  return (
    <button type="button" className="button-circle" disabled={disabled}>
      {children}
    </button>
  );
};
