import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  btnClass?: string;
  onClick?: () => void;
  to: string;
  isActive?: boolean;
  isLoading?: boolean;
};

export const Button: React.FC<Props> = ({
  children,
  btnClass,
  onClick,
  to,
  isActive = false,
  isLoading = false,
}) => {
  return (
    <Link
      to={`${to}`}
      className={cn(`button ${btnClass}`, {
        'button--active': isActive,
        'button--loading': isLoading,
      })}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
