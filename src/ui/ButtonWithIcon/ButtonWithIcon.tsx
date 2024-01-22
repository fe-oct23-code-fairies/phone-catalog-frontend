import React from 'react';

type Props = {
  children: React.ReactNode,
  onClick?: () => void,
};

export const ButtonWithIcon: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="icon-wrapper"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
