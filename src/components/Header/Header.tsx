import './Header.scss';
import { Navbar } from './Navbar';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <p>Logo</p>
      <Navbar />
      <p className="header-right">RB</p>
    </header>
  );
};
