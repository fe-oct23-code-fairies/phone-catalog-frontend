import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPhones } from '../../../api/phones';
import { getTablets } from '../../../api/tablets';
import { getAccessories } from '../../../api/accessories';

export const SectionCategories: React.FC = () => {
  const [phonesCount, setPhonesCount] = useState(0);
  const [tabletsCount, setTabletsCount] = useState(0);
  const [accessoriesCount, setAccessoriesCount] = useState(0);

  useEffect(() => {
    getPhones()
      .then(data => {
        setPhonesCount(data.length);
      })
      .catch(() => {});

    getTablets()
      .then(data => {
        setTabletsCount(data.length);
      })
      .catch(() => {});

    getAccessories()
      .then(data => {
        setAccessoriesCount(data.length);
      })
      .catch(() => {});
  });

  return (
    <div className="categories-wrapper">
      <div className="categories">
        <h2>Shop by category</h2>
        <div className="categories__container">
          <div className="categories__item">
            <Link to="/phones" className="categories__img-link">
              <img src="images/category-phones.png" alt="Phones Category" />
            </Link>

            <div className="categories__text-wrapper">
              <Link to="/phones" className="categories__title">
                Mobile phones
              </Link>

              <p className="categories__counter">{`${phonesCount} models`}</p>
            </div>
          </div>

          <div className="categories__item">
            <Link to="/tablets" className="categories__img-link">
              <img src="images/category-tablets.png" alt="Tablets Category" />
            </Link>

            <div className="categories__text-wrapper">
              <Link to="/tablets" className="categories__title">
                Tablets
              </Link>

              <p className="categories__counter">{`${tabletsCount} models`}</p>
            </div>
          </div>

          <div className="categories__item">
            <Link to="/accessories" className="categories__img-link">
              <img
                src="images/category-accessories.png"
                alt="Accessories Category"
              />
            </Link>

            <div className="categories__text-wrapper">
              <Link to="/accessories" className="categories__title">
                Accessories
              </Link>

              <p className="categories__counter">{`${accessoriesCount} models`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
