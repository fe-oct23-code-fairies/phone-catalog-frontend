import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './Navbar.scss';

const NAV_LINK_TITLES = ['home', 'phone', 'tablets', 'accessories'];

const getLinkClass = ({ isActive }: { isActive: boolean }) => cn(
  'navbar-link',
  { 'navbar-link--active': isActive },
);

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {NAV_LINK_TITLES.map(title => {
        const link = title === 'home' ? '/' : `/${title}`;

        return (
          <NavLink
            to={link}
            className={getLinkClass}
            key={title}
          >
            {title.toUpperCase()}
          </NavLink>
        );
      })}
    </nav>
  );
};
