import React from 'react';

type Props = {
  children: React.ReactNode,
  isDisabled?: boolean,
};

export const CircleButton: React.FC<Props> = ({
  children,
  isDisabled = false,
}) => {
  return (
    <button
      type="button"
      className="button-circle"
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
