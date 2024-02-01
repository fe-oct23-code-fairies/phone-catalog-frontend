import { useEffect, useState } from 'react';
import { CardLayout } from '../components/CardLayout';
import { ErrorNotification } from '../components/ErrorNotification';
import { Loader } from '../components/Loader/Loader';
import { useCatalogContext } from '../context/CatalogContext';
import { Pagination } from '../ui/Pagination';
import { getAccessories, getAccessoriesByQuery } from '../api/accessories';
import { Product } from '../types/Product';
import { Dropdown } from '../ui/Dropdown';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';

export const Accessories: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [accessories, setAccessories] = useState<Product[]>([]);

  const {
    setTotalItems,
    handleError,
    error,
    itemsPerPage,
    selectItemsPerPage,
    sortBy,
    selectSortBy,
    params,
    parsedItemsPerPage,
    parsedSortBy,
  } = useCatalogContext();

  const paramsPage = params.get('page') || '1';
  const paramsPerPage = params.get('perPage') || parsedItemsPerPage.toString();
  const paramsSortBy = params.get('sort') || parsedSortBy;

  useEffect(() => {
    const sortOrder = paramsSortBy === 'year' ? 'DESC' : 'ASC';

    Promise.all([
      getAccessoriesByQuery(paramsPage, paramsPerPage, paramsSortBy, sortOrder),
      getAccessories(),
    ])
      .then(([queryAccessories, allAccessories]) => {
        setTotalItems(allAccessories.length);
        setAccessories(queryAccessories);
      })
      .catch(() => handleError(`Unable to load accessories!
      Try to reload this page.`))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 500);
      });
  }, [paramsPage, paramsPerPage, paramsSortBy]);

  return (
    <>
      <Breadcrumbs />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!error && (
            <>
              <div className="section-top">
                <h1 className="h1">Accessories</h1>
                <p className="text-body section-text">
                  {`${accessories.length} models`}
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
                {accessories.map((accessory) => (
                  <CardLayout key={accessory.id} product={accessory} />
                ))}
              </div>

              <Pagination />
            </>
          )}

          {error && <ErrorNotification error={error} />}
        </>
      )}
    </>
  );
};
