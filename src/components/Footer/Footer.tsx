import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { Icon } from '../Icons';

function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className="footer__items">
        <a
          href="https://github.com/fe-oct23-code-fairies/phone-catalog-frontend"
          className="text-link"
        >
          Github
        </a>

        <Link
          to="/contacts"
          className="text-link"
        >
          Contacts
        </Link>

        <Link
          to="/rights"
          className="text-link"
        >
          Rights
        </Link>
      </div>

      <div className="footer__scroll-up">
        <label
          htmlFor="to-top"
          className="text-small footer__button-label"
        >
          Back to top
        </label>
        <button
          type="button"
          id="to-top"
          aria-label="to-top"
          className="button-icon"
          onClick={scrollTop}
        >
          <Icon iconName="arrow-up" />
        </button>
      </div>
    </footer>
  );
};
