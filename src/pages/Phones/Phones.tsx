import { useEffect, useState } from 'react';
import { CardLayout } from '../../components/CardLayout';
import { client } from '../../utils/fetchClient';
import { Product } from '../../types/Product';
import { Loader } from '../../components/Loader/Loader';
import { ErrorNotification } from '../../components/ErrorNotification';

export const Phones: React.FC = () => {
  const [phonesToShow, setPhonesToShow] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  useEffect(() => {
    client
      .getPhones()
      .then((data) => {
        setPhonesToShow(data);
      })
      .catch(() => handleError('Unable to load phones'))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="phones__title">Mobile phones</h1>
      {isLoading
        ? <Loader />
        : (
          <div className="grid__container">
            {phonesToShow.map((phone) => (
              <CardLayout
                key={phone.id}
                phoneName={phone.name}
                phonePrice={phone.price}
                phoneScreen={phone.screen}
                phoneCapacity={phone.capacity}
                phoneRam={phone.ram}
              />
            ))}
          </div>
        )}

      {error && <ErrorNotification error={error} />}
    </>
  );
};
