import { useEffect, useState } from 'react';
import { getTablets } from '../api/tablets';
import { useCatalogContext } from '../context/CatalogContext';
import { CardLayout } from '../components/CardLayout';
import { Pagination } from '../ui/Pagination';
import { ErrorNotification } from '../components/ErrorNotification';
import { Loader } from '../components/Loader/Loader';
import { Product } from '../types/Product';
import { Dropdown } from '../ui/Dropdown';

export const Tablets: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tablets, setTablets] = useState<Product[]>([]);

  const {
    setTotalItems,
    handleError,
    error,
    prepareProductForPage,
    itemsPerPage,
    selectItemsPerPage,
    sortBy,
    selectSortBy,
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

  const visibleTablets = prepareProductForPage(tablets, sortBy);

  return (
    <>
      {isLoading
        ? <Loader />
        : (
          <>
            <div className="section-top">
              <h1 className="h1">Tablets</h1>
              <p className="text-body section-text">
                {`${tablets.length} models`}
              </p>
            </div>

            <div className="section-dropdowns">
              <Dropdown
                items={['Newest', 'Alphabetically', 'Cheapest']}
                description="Sort by"
                startValue={sortBy}
                onSelection={selectSortBy}
              />

              <Dropdown
                items={[16, 8, 4]}
                description="Items on page"
                startValue={itemsPerPage}
                onSelection={selectItemsPerPage}
              />
            </div>

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
