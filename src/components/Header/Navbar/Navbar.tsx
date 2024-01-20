import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { Dispatch, SetStateAction } from 'react';

const NAV_LINK_TITLES = ['home', 'phones', 'tablets', 'accessories'];

const getLinkClass = ({ isActive }: { isActive: boolean }) => cn(
  'header-link',
  { 'header-link--active': isActive },
);

interface Props {
  isMenuOpen: boolean,
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>,
}

export const Navbar: React.FC<Props> = ({
  isMenuOpen,
  setIsMenuOpen,
}: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
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

      <div className="navbar-right">
        <NavLink
          to="/favorites"
          className={getLinkClass}
        >
          <div className="navbar-button navbar-button--favorites" />
        </NavLink>
        <NavLink
          to="/checkout"
          className={getLinkClass}
        >
          <div className="navbar-button navbar-button--cart" />
        </NavLink>
        <div
          role="presentation"
          className={cn(
            'navbar-button',
            {
              'navbar-button--menu': !isMenuOpen,
              'navbar-button--close': isMenuOpen,
            },
          )}
          onClick={() => setIsMenuOpen(prev => !prev)}
        />
      </div>
    </nav>
  );
};
