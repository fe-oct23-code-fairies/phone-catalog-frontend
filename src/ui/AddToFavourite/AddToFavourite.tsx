import React from 'react';

export const AddToFavourite: React.FC = () => {
  return (
    <button aria-label="Favourite" type="button" className="button-favourite">
      <img src="images/icons/favorite.svg" alt="" />
    </button>
  );
};
