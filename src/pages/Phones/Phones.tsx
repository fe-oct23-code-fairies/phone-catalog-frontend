import { useEffect, useState } from 'react';
import { CardLayout } from '../../components/CardLayout';
import { Loader } from '../../components/Loader/Loader';
import { ErrorNotification } from '../../components/ErrorNotification';
import { getPhones } from '../../api/phones';
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
    prepareProductForPage,
    itemsPerPage,
    selectItemsPerPage,
    sortBy,
    selectSortBy,
  } = useCatalogContext();

  useEffect(() => {
    getPhones()
      .then((data) => {
        setTotalItems(data.length);
        setPhones(data);
      })
      .catch(() => handleError(`Unable to load mobile phones!
      Try to reload this page.`))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 500);
      });
  });

  const visiblePhones = prepareProductForPage(phones, sortBy);

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
                {visiblePhones.map((phone) => (
                  <CardLayout key={phone.id} product={phone} />
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
