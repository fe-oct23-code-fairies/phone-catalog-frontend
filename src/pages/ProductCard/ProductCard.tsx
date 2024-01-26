import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getPhoneById } from '../../api/phones';
import { getTabletById } from '../../api/tablets';
import { getAccessorieById } from '../../api/accessories';
import { Item } from '../../types/Item';

const defaultItem = {
  id: '',
  namespaceId: '',
  name: '',
  capacityAvailable: [],
  capacity: '',
  priceRegular: 0,
  priceDiscount: 0,
  colorsAvailable: [],
  color: '',
  images: [],
  description: [],
  screen: '',
  resolution: '',
  processor: '',
  ram: '',
  camera: '',
  zoom: '',
  cell: [],
};

type Props = {
  productType: string
};

export const ProductCard: React.FC<Props> = ({ productType }) => {
  const { itemId } = useParams();
  const [foundProduct, setFoundProduct] = useState<Item>(defaultItem);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (itemId) {
          switch (productType) {
            case 'phones':
              getPhoneById(itemId)
                .then(phone => setFoundProduct(phone));
              break;

            case 'tablets':
              getTabletById(itemId)
                .then(tablet => setFoundProduct(tablet));
              break;

            default:
              getAccessorieById(itemId)
                .then(accessories => setFoundProduct(accessories));
              break;
          }
        }
      } catch (error) {
        navigate('/');
      }
    };

    fetchData();
  });

  return (
    <div className="productCard">
      <p className="h2 product-title">
        {`Product id: ${foundProduct?.id}`}
      </p>

      <br />

      <p className="h2 product-title">
        {`Product capasity: ${foundProduct?.capacity}`}
      </p>
    </div>
  );
};
