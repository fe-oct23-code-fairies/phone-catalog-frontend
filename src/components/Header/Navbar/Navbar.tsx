import cn from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '../../../ui/Icons';
import { getLinkClass } from '../helper';
import { useAppContext } from '../../../context/AppContext';

const NAV_LINK_TITLES = ['home', 'phones', 'tablets', 'accessories'];

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({
  isMenuOpen,
  setIsMenuOpen,
}: Props) => {
  const { cartProductsAmount, favoriteProductsAmount } = useAppContext();
  const user = localStorage.getItem('login');

  const handleLogout = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('favoriteProductsAmount');
    localStorage.removeItem('favorites');
    localStorage.removeItem('addedToFavoriteProducts');
    localStorage.removeItem('addedToCartProducts');
    localStorage.removeItem('cartProductsAmount');
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        {NAV_LINK_TITLES.map(title => {
          const link = title === 'home' ? '/' : `/${title}`;

          return (
            <NavLink
              to={link}
              className={getLinkClass}
              key={title}
            >
              {title}
            </NavLink>
          );
        })}
      </div>

      <div className="navbar__right">
        <NavLink
          to="/favorites"
          className={getLinkClass}
        >
          <div className="navbar__button navbar__button-main">
            <Icon iconName="heart" />

            {favoriteProductsAmount > 0 && (
              <p className="navbar__text-amount-of-products">
                {favoriteProductsAmount}
              </p>
            )}
          </div>
        </NavLink>
        <NavLink
          to="/checkout"
          className={getLinkClass}
        >
          <div className="navbar__button navbar__button-main">
            <Icon iconName="cart" />

            {cartProductsAmount > 0 && (
              <p className="navbar__text-amount-of-products">
                {cartProductsAmount}
              </p>
            )}
          </div>
        </NavLink>
        {user ? (
          <Link
            to="/"
            onClick={handleLogout}
            className="header__link text-link"
          >
            <div className="navbar__button navbar__button-main">
              <Icon iconName="logout" />
            </div>
          </Link>
        ) : (
          <Link
            to="/auth/signin"
            className="header__link text-link"
          >
            <div className="navbar__button navbar__button-main">
              <Icon iconName="user" />
            </div>
          </Link>
        )}
        <div
          role="presentation"
          className={cn('navbar__button', {
            'navbar__button-menu': !isMenuOpen,
            'navbar__button-close': isMenuOpen,
          })}
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <Icon iconName={isMenuOpen ? 'close' : 'menu'} />
        </div>
      </div>
    </nav>
  );
};
