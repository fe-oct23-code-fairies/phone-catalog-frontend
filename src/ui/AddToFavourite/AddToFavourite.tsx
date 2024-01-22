import React from 'react';
import cn from 'classnames';
import { Icon } from '../Icons';

interface Props {
  isFavorite: boolean,
  onClick: () => void,
}

export const AddToFavourite: React.FC<Props> = ({ isFavorite, onClick }) => {
  return (
    <button
      aria-label="Favourite"
      type="button"
      className={cn(
        'button-favourite',
        { 'button-favourite--active': isFavorite },
      )}
      onClick={onClick}
    >
      <Icon iconName={isFavorite ? 'heart-filled' : 'heart'} />
    </button>
  );
};
