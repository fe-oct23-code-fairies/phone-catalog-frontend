/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { CardLayout } from '../../components/CardLayout';
import { Item } from '../../types/Item';
import { getPhones } from '../../api/phones';

export const Phones: React.FC = () => {
  const [phones, setPhones] = useState<Item[]>([]);

  useEffect(() => {
    getPhones()
      .then(setPhones);
  }, []);

  return (
    <>
      <h1 className="phones__title">Mobile phones</h1>

      <div className="grid__container">
        {phones.map(
          phone => (
            <CardLayout
              key={phone.id}
              product={phone}
            />
          ),
        )}
      </div>
    </>
  );
};
