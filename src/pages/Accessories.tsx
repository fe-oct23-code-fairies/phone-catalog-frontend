import { useEffect, useState } from 'react';
import { CardLayout } from '../components/CardLayout';
import { ErrorNotification } from '../components/ErrorNotification';
import { Loader } from '../components/Loader/Loader';
import { useCatalogContext } from '../context/CatalogContext';
import { Pagination } from '../ui/Pagination';
import { getAccessories } from '../api/accessories';
import { Product } from '../types/Product';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';

export const Accessories: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [accessories, setAccessories] = useState<Product[]>([]);

  const {
    setTotalItems,
    handleError,
    error,
    prepareProductForPage,
  } = useCatalogContext();

  useEffect(() => {
    getAccessories()
      .then(data => {
        setTotalItems(data.length);
        setAccessories(data);
      })
      .catch(() => handleError('Unable to load phones'))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 500);
      });
  });

  const visibleAccessories = prepareProductForPage(accessories);

  return (
    <>
      <Breadcrumbs />
      <h1 className="h1">Accessories Page</h1>

      {isLoading
        ? <Loader />
        : (
          <>
            <p className="text-body section-text">
              {`${accessories.length} models`}
            </p>
            <div className="grid__container">
              {visibleAccessories.map((accessorie) => (
                <CardLayout
                  key={accessorie.id}
                  product={accessorie}
                />
              ))}
            </div>

            <Pagination />

            {error && <ErrorNotification error={error} />}
          </>
        )}
    </>
  );
};
