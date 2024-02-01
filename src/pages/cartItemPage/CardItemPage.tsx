import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getDetailedById,
  getDetailedRecommended,
} from '../../api/detailedProducts';
import { getProducts } from '../../api/products';
import { ColorsAndGbVariants } from '../../components/ColorsAndGB';
import { ErrorNotification } from '../../components/ErrorNotification';
import { Loader } from '../../components/Loader/Loader';
import {
  PhonesSection,
} from '../../components/Sections/PhonesSection/PhoneSection';
import { PhotoBlock } from '../../components/photoBlock';
import { Sections } from '../../components/sectionsForCartItemPage';
import { Item } from '../../types/Item';
import { Product } from '../../types/Product';
import './CardItemPage.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const CardItemPage: React.FC = () => {
  const { itemId } = useParams();

  const [
    selectedProduct,
    setSelectedProduct,
  ] = useState<Item | undefined>(undefined);
  const [
    nonDetailedProduct,
    setNonDetailedProduct,
  ] = useState<Product | undefined>(undefined);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getInfo = (newItemId: string) => {
    return Promise.all([
      getProducts(),
      getDetailedById(newItemId || ''),
    ])
      .then(([allProducts, detailedProduct]) => {
        const thisProduct = allProducts
          .find(product => product.itemId === detailedProduct.id);

        setSelectedProduct(detailedProduct);
        setNonDetailedProduct(thisProduct);
      })
      .catch(() => setError(
        'Could not load information about this product! Please try again',
      ));
  };

  useEffect(() => {
    setIsLoading(true);

    getInfo(itemId || '')
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  return (
    <>
      {!isLoading ? (
        <>
          <Breadcrumbs title={selectedProduct?.name || 'Error'} />
          {!error && selectedProduct && nonDetailedProduct ? (
            <>
              <div className="container">
                <div className="photo-and-sections">
                  <h2
                    className="photo-and-sections__title"
                  >
                    {selectedProduct.name}
                  </h2>
                  <div className="photos-and-additional-info">
                    <PhotoBlock product={selectedProduct} />
                    <ColorsAndGbVariants
                      product={selectedProduct}
                      nonDetailedProduct={nonDetailedProduct}
                      refreshInfo={getInfo}
                      setError={setError}
                    />
                  </div>
                  <Sections product={selectedProduct} />
                </div>
              </div>
              {selectedProduct.id && (
                <PhonesSection
                  prefixSlider="recommended"
                  title="You may also like"
                  id={selectedProduct.id}
                  getterCallback={getDetailedRecommended}
                />
              )}
            </>
          ) : (
            <ErrorNotification error={error} />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
