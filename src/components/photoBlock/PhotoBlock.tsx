import React, { useState } from 'react';
import cn from 'classnames';
import './PhotoBlock.scss';

const photos = [
  'https://img.jabko.ua/image/cache/catalog/products/2024/01/221734/kjhgbnv-1397x1397.jpg.webp',
  'https://img.jabko.ua/image/cache/catalog/products/2024/01/221734/vlvhghg-1397x1397.jpg.webp',
  'https://img.jabko.ua/image/cache/catalog/products/2024/01/221734/lojghf-1397x1397.jpg.webp',
  'https://img.jabko.ua/image/cache/catalog/products/2024/01/221734/fokvjgjhg-1397x1397.jpg.webp',
  'https://img.jabko.ua/image/cache/catalog/products/2024/01/221734/flovkjg-1397x1397.jpg.webp',
]

export const PhotoBlock: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(photos[0]);

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className='container'>
      <div className="photo__block">
        {photos.map((photo, index) => (
          <img
            className={cn("photo__block-img", {
              selected: selectedPhoto === photo
            })}
            key={index}
            src={photo}
            alt={`Photo number ${index}`}
            onClick={() => handlePhotoClick(photo)}
          />
        ))}
      </div>

      <div>
        {selectedPhoto && (
          <div>
            <img
              className="photo__block-main"
              src={selectedPhoto}
              alt="selected photo" />
          </div>
        )}
      </div>
    </div>
  );
};
