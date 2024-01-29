import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { Icon } from '../../../ui/Icons';
import { getLinkClass } from '../helper';
import { useAppContext } from '../../../context/AppContext';

const NAV_LINK_TITLES = ['home', 'phones', 'tablets', 'accessories'];

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navmenu: React.FC<Props> = ({
  isMenuOpen,
  setIsMenuOpen,
}: Props) => {
  const { cartProductsAmount, favoriteProductsAmount } = useAppContext();

  return (
    <aside className={cn('navmenu', { 'navmenu--open': isMenuOpen })}>
      <div className="navmenu__top">
        {NAV_LINK_TITLES.map((title) => {
          const link = title === 'home' ? '/' : `/${title}`;

          return (
            <NavLink
              to={link}
              className={getLinkClass}
              key={title}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {title}
            </NavLink>
          );
        })}
      </div>

      <div className="navmenu__bottom">
        <NavLink
          to="/favorites"
          className={getLinkClass}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div className="navmenu__button">
            <Icon iconName="heart" />

            {favoriteProductsAmount > 0 && (
              <p className="navmenu__text-amount-of-products">
                {favoriteProductsAmount}
              </p>
            )}
          </div>
        </NavLink>
        <NavLink
          to="/checkout"
          className={getLinkClass}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div className="navmenu__button">
            <Icon iconName="cart" />

            {cartProductsAmount > 0 && (
              <p className="navmenu__text-amount-of-products">
                {cartProductsAmount}
              </p>
            )}
          </div>
        </NavLink>
      </div>
    </aside>
  );
};
