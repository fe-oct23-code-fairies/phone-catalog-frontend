import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode,
  btnClass?: string,
  onClick?: () => void,
  to: string,
};

export const Button: React.FC<Props> = ({
  children,
  btnClass,
  onClick,
  to,
}) => {
  return (
    <Link
      to={`${to}`}
      className={`button ${btnClass}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
