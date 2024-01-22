import cn from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { getLinkClass } from '../helper';

const NAV_LINK_TITLES = ['home', 'phones', 'tablets', 'accessories'];

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({
  isMenuOpen,
  setIsMenuOpen,
}: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        {NAV_LINK_TITLES.map((title) => {
          const link = title === 'home' ? '/' : `/${title}`;

          return (
            <NavLink to={link} className={getLinkClass} key={title}>
              {title}
            </NavLink>
          );
        })}
      </div>

      <div className="navbar__right">
        <NavLink to="/favorites" className={getLinkClass}>
          <div className="navbar__button navbar__button-favorites" />
        </NavLink>
        <NavLink to="/checkout" className={getLinkClass}>
          <div className="navbar__button navbar__button-cart" />
        </NavLink>
        <div
          role="presentation"
          className={cn('navbar__button', {
            'navbar__button-menu': !isMenuOpen,
            'navbar__button-close': isMenuOpen,
          })}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
    </nav>
  );
};
