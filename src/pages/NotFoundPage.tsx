import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="notFound">
      <div className="notFound__text-container">
        <div className="h2">
          Oooops...
        </div>

        <div className="text-body">
          Page you’re looking not found
        </div>
      </div>

      <img
        // eslint-disable-next-line global-require
        src={require('../images/error-img.png')}
        alt="404 not found"
        className="notFound__img"
      />

      <Link to="/" className="button">
        Back to main page
      </Link>
    </div>
  );
};
