import { Button } from '../../ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="notFound">
      <div className="notFound__text-container">
        <div className="h2">Oooops...</div>

        <div className="text-body">Page you’re looking not found</div>
      </div>

      <img
        src="images/error-img.png"
        alt="404 not found"
        className="notFound__img"
      />

      <Button to="/">Back to main page</Button>
    </div>
  );
};
