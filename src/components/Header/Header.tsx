import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Logo } from '../../ui/Logo';
import { Navmenu } from './Navmenu/Navmenu';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__bar">
          <Link
            to="/"
            className="header__logo"
            onClick={() => setIsMenuOpen(false)}
          >
            <Logo />
          </Link>

          <div className="header__right">
            <Navbar
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>
      </header>

      <Navmenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
};
