import { useEffect, useState } from 'react';
import { getTablets } from '../api/tablets';
import { useCatalogContext } from '../context/CatalogContext';
import { CardLayout } from '../components/CardLayout';
import { Pagination } from '../ui/Pagination';
import { ErrorNotification } from '../components/ErrorNotification';
import { Loader } from '../components/Loader/Loader';
import { Product } from '../types/Product';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';

export const Tablets: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tablets, setTablets] = useState<Product[]>([]);

  const {
    setTotalItems,
    handleError,
    error,
    prepareProductForPage,
  } = useCatalogContext();

  useEffect(() => {
    getTablets()
      .then(data => {
        setTotalItems(data.length);
        setTablets(data);
      })
      .catch(() => handleError('Unable to load phones'))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 500);
      });
  });

  const visibleTablets = prepareProductForPage(tablets);

  return (
    <>
      <Breadcrumbs />
      <h1 className="h1">Tablets Page</h1>

      {isLoading
        ? <Loader />
        : (
          <>
            <p className="text-body section-text">
              {`${tablets.length} models`}
            </p>
            <div className="grid__container">
              {visibleTablets.map((tablet) => (
                <CardLayout
                  key={tablet.id}
                  product={tablet}
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
