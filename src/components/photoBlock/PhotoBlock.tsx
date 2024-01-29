import cn from 'classnames';
import React, { useState } from 'react';
import './PhotoBlock.scss';

const BASE_URL = process.env.REACT_APP_BASE_URL;

type Props = {
  images: string[]
}

export const PhotoBlock: React.FC<Props> = ({ images }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(images[0]);
  const [photos] = useState(images);

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="container">
      <div className="photo__block">
        {photos.map((photo, index) => (
          <button
            className={cn('photo__block-button', {
              'photo__block-button--selected': selectedPhoto === photo,
            })}
            type="button"
            key={photo}
            onClick={() => handlePhotoClick(photo)}
          >
            <img
              className="photo__block-img"
              src={`${BASE_URL}static/${photo}`}
              alt={`Thumbnail ${index + 1}`}
            />
          </button>
        ))}
      </div>

      <div>
        {selectedPhoto && (
          <img
            className="photo__block-main"
            src={`${BASE_URL}static/${selectedPhoto}`}
            alt={selectedPhoto}
          />
        )}
      </div>
    </div>
  );
};
