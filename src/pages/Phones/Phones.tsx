import { useEffect, useState } from 'react';
import { CardLayout } from '../../components/CardLayout';
import { Loader } from '../../components/Loader/Loader';
import { ErrorNotification } from '../../components/ErrorNotification';
import { getPhones, getPhonesByQuery } from '../../api/phones';
import { Pagination } from '../../ui/Pagination';
import { useCatalogContext } from '../../context/CatalogContext';
import { Product } from '../../types/Product';
import { Dropdown } from '../../ui/Dropdown';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const Phones: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [phones, setPhones] = useState<Product[]>([]);

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
    Promise.all([
      getPhonesByQuery(paramsPage, paramsPerPage, paramsSortBy),
      getPhones(),
    ])
      .then(([queryPhones, allPhones]) => {
        setTotalItems(allPhones.length);
        setPhones(queryPhones);
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
          {!error ? (
            <>
              <div className="section-top">
                <h1 className="h1">Mobile phones</h1>
                <p className="text-body section-text">
                  {`${phones.length} models`}
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
                {phones.map((phone) => (
                  <CardLayout key={phone.id} product={phone} />
                ))}
              </div>

              <Pagination />
            </>
          ) : (
            <ErrorNotification error={error} />
          )}
        </>
      )}
    </>
  );
};
