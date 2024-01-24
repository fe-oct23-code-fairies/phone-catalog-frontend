import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api/products';
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

export const ProductCard: React.FC = () => {
  const { itemId } = useParams();
  const [foundProduct, setFoundProduct] = useState<Item>(defaultItem);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        const product = products
          .find(productToFind => productToFind.itemId === itemId) || null;

        if (product) {
          switch (product.category) {
            case 'phones':
              getPhoneById(product.itemId)
                .then(phone => setFoundProduct(phone));
              break;

            case 'tablets':
              getTabletById(product.itemId)
                .then(tablet => setFoundProduct(tablet));
              break;

            default:
              getAccessorieById(product.itemId)
                .then(accessorie => setFoundProduct(accessorie));
              break;
          }
        }
      } catch (error) {
        throw new Error("Can't find a product");
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <div className="productCard">
      <p className="h2">
        {foundProduct?.id}
      </p>
      <p className="h2">
        {foundProduct?.capacity}
      </p>
    </div>
  );
};
