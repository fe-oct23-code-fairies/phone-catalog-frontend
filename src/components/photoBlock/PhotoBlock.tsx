import React, { useState } from 'react';
import cn from 'classnames';
import './PhotoBlock.scss';

const photos = [
  'https://img.jabko.ua/image/cache/catalog'
  + '/products/2024/01/221734/kjhgbnv-1397x1397.jpg.webp',
  'https://img.jabko.ua/image/cache/catalog/prod'
  + 'ucts/2024/01/221734/vlvhghg-1397x1397.jpg.webp',
  'https://img.jabko.ua/image/cache/catalog/produ'
  + 'cts/2024/01/221734/lojghf-1397x1397.jpg.webp',
  'https://img.jabko.ua/image/cache/catalog/product'
  + 's/2024/01/221734/fokvjgjhg-1397x1397.jpg.webp',
  'https://img.jabko.ua/image/cache/catalog/produc'
  + 'ts/2024/01/221734/flovkjg-1397x1397.jpg.webp',
];

export const PhotoBlock: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(photos[0]);

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="container">
      <div className="photo__block">
        {photos.map((photo, index) => (
          <img
            key={photo}
            className={cn('photo__block-img', {
              selected: selectedPhoto === photo,
            })}
            onClick={() => handlePhotoClick(photo)}
            src={photo}
            alt={`Thumbnail ${index + 1}`}
          />
        ))}
      </div>

      <div>
        {selectedPhoto && (
          <img
            className="photo__block-main"
            src={selectedPhoto}
            alt="selected photo"
          />
        )}
      </div>
    </div>
  );
};
