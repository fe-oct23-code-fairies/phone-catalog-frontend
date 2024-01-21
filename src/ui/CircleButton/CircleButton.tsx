import React from 'react';

type Props = {
  children: React.ReactNode
};

export const CircleButton: React.FC<Props> = ({ children }) => {
  return (
    <button
      type="button"
      className="button-circle"
    >
      {children}
    </button>
  );
};
