import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ColorsAndGbVariants } from '../../components/ColorsAndGB';
import { PhotoBlock } from '../../components/photoBlock';
import { Sections } from '../../components/sectionsForCartItemPage';
import './CardItemPage.scss';
import { Item } from '../../types/Item';

export const CardItemPage: React.FC = () => {
  const { itemId } = useParams();
  const [phone, setPhone] = useState<Item | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fe-oct23-code-fairies-backend.onrender.com/products-detailed/${itemId}`);
        const data = await response.json();

        setPhone(data);
      } catch (error) {
        // console.error('Error fetching phone data:', error);
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <div className="container">
      <div className="photo-and-sections">
        {phone && (
          <>
            <div className="photos-and-additional-info">
              <PhotoBlock images={phone.images} />
              <ColorsAndGbVariants
                colors={phone.coloursAvailable}
                availableGBs={phone.capacityAvailable}
                phone={phone}
              />
            </div>
            <Sections phone={phone} />
          </>
        )}
      </div>
    </div>
  );
};
