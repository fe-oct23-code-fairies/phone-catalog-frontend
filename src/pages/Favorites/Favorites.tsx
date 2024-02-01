import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { CardLayout } from '../../components/CardLayout';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const Favorites: React.FC = () => {
  const {
    addedToFavoriteProducts,
    setAddedToFavoriteProducts,
    parsedFavoriteProducts,
  } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('login');

    if (!user) {
      navigate('/auth/signin', { replace: true });
    }

    setAddedToFavoriteProducts(parsedFavoriteProducts);
  }, [navigate]);

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
