import { useEffect, useState } from 'react';
import { CardLayout } from '../../components/CardLayout';
import { client } from '../../utils/fetchClient';
import { Product } from '../../types/Product';
import { Loader } from '../../components/Loader/Loader';

export const Phones: React.FC = () => {
  const [toShow, setToShow] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    client
      .getPhones()
      .then((data) => {
        setToShow(data);
      })
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
            {toShow.map((phone) => (
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
    </>
  );
};
