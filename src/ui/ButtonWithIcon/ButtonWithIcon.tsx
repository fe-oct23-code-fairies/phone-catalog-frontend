import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  additionalClass?: string
};

export const ButtonWithIcon: React.FC<Props> = ({
  children,
  onClick,
  additionalClass,
}) => {
  return (
    <button
      type="button"
      className={`icon-wrapper ${additionalClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
