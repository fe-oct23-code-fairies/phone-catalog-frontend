import { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { CardLayout } from '../../components/CardLayout';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const Favorites: React.FC = () => {
  const {
    addedToFavoriteProducts,
    setAddedToFavoriteProducts,
    parsedFavoriteProducts,
  } = useAppContext();

  useEffect(() => {
    setAddedToFavoriteProducts(parsedFavoriteProducts);
  }, []);

  const favoritesIsntEmpty = addedToFavoriteProducts
    && addedToFavoriteProducts.length > 0;

  const favoritesAmount = addedToFavoriteProducts.length;

  return (
    <div className="favorites">
      <Breadcrumbs />
      <p className="h1">Favorites</p>
      {favoritesIsntEmpty
        ? (
          <>
            <p className="text-body section-text">
              {`${favoritesAmount} items`}
            </p>
            <div className="grid__container">
              {addedToFavoriteProducts.map(
                (addedProduct) => (
                  <CardLayout
                    key={addedProduct.id}
                    product={addedProduct}
                  />
                ),
              )}
            </div>
          </>
        ) : (
          <p className="favorites__no-products-text">
            The are no favorite products
          </p>
        )}
    </div>
  );
};
