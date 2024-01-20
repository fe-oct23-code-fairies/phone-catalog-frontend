import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { Dispatch, SetStateAction } from 'react';

const NAV_LINK_TITLES = ['home', 'phones', 'tablets', 'accessories'];

const getLinkClass = ({ isActive }: { isActive: boolean }) => cn(
  'header-link',
  { 'header-link--active': isActive },
);

interface Props {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navmenu: React.FC<Props> = ({ setIsMenuOpen }: Props) => {
  return (
    <div className="navmenu">
      <div className="navmenu-top">
        {NAV_LINK_TITLES.map(title => {
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

      <div className="navmenu-bottom">
        <NavLink
          to="/favorites"
          className={getLinkClass}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div className="navmenu-button navmenu-button--favorites" />
        </NavLink>
        <NavLink
          to="/checkout"
          className={getLinkClass}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div className="navmenu-button navmenu-button--cart" />
        </NavLink>
      </div>
    </div>
  );
};
