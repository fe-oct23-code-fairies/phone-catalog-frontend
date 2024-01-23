import { Link } from 'react-router-dom';
import { Logo } from '../../ui/Logo';
import { Icon } from '../../ui/Icons';
import { CircleButtonWithIcon } from '../../ui/CircleButtonWithIcon';

function scrollTop() {
  const page = document.querySelector('#app-page');

  if (page) {
    page.scrollTop = 0;
  }
}

const ghRef = 'https://github.com/fe-oct23-code-fairies/phone-catalog-frontend';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="footer__items">
          <a href={ghRef} className="text-link">
            Github
          </a>

          <Link to="/contacts" className="text-link">
            Contacts
          </Link>

          <Link to="/rights" className="text-link">
            Rights
          </Link>
        </div>

        <div className="footer__scroll-up">
          <label htmlFor="to-top" className="text-small footer__button-label">
            Back to top
          </label>
          <CircleButtonWithIcon onClick={scrollTop}>
            <Icon iconName="arrow-up" />
          </CircleButtonWithIcon>
        </div>
      </div>
    </footer>
  );
};
