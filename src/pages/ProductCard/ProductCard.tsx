import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import { getfoundProductById } from '../../api/foundProducts';
// import { getTabletById } from '../../api/tablets';
import { Item } from '../../types/Item';
import { getProductById } from '../../api/products';
import { ColorsAndGbVariants } from '../../components/ColorsAndGB';
import { Sections } from '../../components/sectionsForCartItemPage';
import { PhotoBlock } from '../../components/photoBlock';

export const ProductCard: React.FC = () => {
  const { itemId } = useParams();
  const [foundProduct, setFoundProduct] = useState<Item>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (itemId) {
          getProductById(itemId)
            .then(setFoundProduct);
        }
      } catch (error) {
        navigate('/');
      }
    };

    fetchData();
  });

  return (
    <div className="photo-and-sections">
      {foundProduct && (
        <>
          <div className="photos-and-additional-info">
            <PhotoBlock images={foundProduct.images} />
            <ColorsAndGbVariants
              colors={foundProduct.coloursAvailable}
              availableGBs={foundProduct.capacityAvailable}
              product={foundProduct}
            />
          </div>
          <Sections product={foundProduct} />
        </>
      )}
    </div>
  );
};
