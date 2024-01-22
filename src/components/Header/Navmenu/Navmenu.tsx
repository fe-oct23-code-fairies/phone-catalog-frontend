import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { getLinkClass } from '../helper';

const NAV_LINK_TITLES = ['home', 'phones', 'tablets', 'accessories'];

interface Props {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navmenu: React.FC<Props> = ({ setIsMenuOpen }: Props) => {
  return (
    <div className="navmenu">
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
          <div className="navmenu__button navmenu__button-favorites" />
        </NavLink>
        <NavLink
          to="/checkout"
          className={getLinkClass}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div className="navmenu__button navmenu__button-cart" />
        </NavLink>
      </div>
    </div>
  );
};
