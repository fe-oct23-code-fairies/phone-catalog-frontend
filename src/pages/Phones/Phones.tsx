import { useEffect, useState } from 'react';
import { CardLayout } from '../../components/CardLayout';
import { Loader } from '../../components/Loader/Loader';
import { ErrorNotification } from '../../components/ErrorNotification';
import { getPhones } from '../../api/phones';
import { Pagination } from '../../ui/Pagination';
import { useCatalogContext } from '../../context/CatalogContext';
import { Product } from '../../types/Product';

export const Phones: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [phones, setPhones] = useState<Product[]>([]);

  const {
    setTotalItems,
    handleError,
    error,
    prepareProductForPage,
  } = useCatalogContext();

  useEffect(() => {
    getPhones()
      .then(data => {
        setTotalItems(data.length);
        setPhones(data);
      })
      .catch(() => handleError('Unable to load phones'))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 500);
      });
  });

  const visiblePhones = prepareProductForPage(phones);

  return (
    <>
      <h1 className="h1">Mobile phones</h1>
      {isLoading
        ? <Loader />
        : (
          <>
            <p className="text-body section-text">
              {`${phones.length} models`}
            </p>
            <div className="grid__container">
              {visiblePhones.map((phone) => (
                <CardLayout
                  key={phone.id}
                  product={phone}
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
