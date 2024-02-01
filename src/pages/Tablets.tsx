import { useEffect, useState } from 'react';
import { getTablets, getTabletsByQuery } from '../api/tablets';
import { useCatalogContext } from '../context/CatalogContext';
import { CardLayout } from '../components/CardLayout';
import { Pagination } from '../ui/Pagination';
import { ErrorNotification } from '../components/ErrorNotification';
import { Loader } from '../components/Loader/Loader';
import { Product } from '../types/Product';
import { Dropdown } from '../ui/Dropdown';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';

export const Tablets: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tablets, setTablets] = useState<Product[]>([]);

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
      getTabletsByQuery(paramsPage, paramsPerPage, paramsSortBy, sortOrder),
      getTablets(),
    ])
      .then(([queryTablets, allTablets]) => {
        setTotalItems(allTablets.length);
        setTablets(queryTablets);
      })
      .catch(() => handleError(`Unable to load mobile phones!
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
                {tablets.map((tablet) => (
                  <CardLayout key={tablet.id} product={tablet} />
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
