import { useEffect, useState } from 'react';
import { CardLayout } from '../../components/CardLayout';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { Loader } from '../../components/Loader/Loader';
import { ErrorNotification } from '../../components/ErrorNotification';
import { getPhones } from '../../api/phones';
import { Pagination } from '../../ui/Pagination';
import { useCatalogContext } from '../../context/CatalogContext';

export const Phones: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const { setTotalItems, setProducts, visibleProducts } = useCatalogContext();

  useEffect(() => {
    getPhones()
      .then(data => {
        setTotalItems(data.length);
        setProducts(data);
      })
      .catch(() => handleError('Unable to load phones'))
      .finally(() => {
        setIsLoading(false);
      });
  });

  return (
    <>
      <h1 className="phones__title">Mobile phones</h1>
      <Breadcrumbs />
      {isLoading
        ? <Loader />
        : (
          <div className="grid__container">
            {visibleProducts.map((phone) => (
              <CardLayout
                key={phone.id}
                product={phone}
              />
            ))}
          </div>
        )}

      <Pagination />

      {error && <ErrorNotification error={error} />}
    </>
  );
};
