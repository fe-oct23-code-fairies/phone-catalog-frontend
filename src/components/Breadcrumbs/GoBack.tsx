import { useNavigate } from 'react-router-dom';
import { Icon } from '../../ui/Icons';

export const GoBack = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line max-len
  const handleGoBack = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();

    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <a
      href="/#"
      className="back-link"
      onClick={handleGoBack}
    >
      <Icon iconName="arrow-left" />
      <span className="back-link__text">Back</span>
    </a>
  );
};
