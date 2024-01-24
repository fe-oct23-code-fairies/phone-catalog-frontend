import { Link } from 'react-router-dom';

export const SectionCategories: React.FC = () => {
  const PHONES_COUNT = 12;
  const TABLETS_COUNT = 9;
  const ACCESSORIES_COUNT = 35;

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
              <p className="categories__title">Mobile phones</p>
              <p className="categories__counter">{`${PHONES_COUNT} models`}</p>
            </div>
          </div>

          <div className="categories__item">
            <Link to="/tablets" className="categories__img-link">
              <img src="images/category-tablets.png" alt="Tablets Category" />
            </Link>
            <div className="categories__text-wrapper">
              <p className="categories__title">Tablets</p>
              <p className="categories__counter">{`${TABLETS_COUNT} models`}</p>
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
              <p className="categories__title">Accessories</p>
              <p className="categories__counter">{`${ACCESSORIES_COUNT} models`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
