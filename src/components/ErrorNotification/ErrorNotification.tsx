import 'bulma/css/bulma.min.css';

interface Props {
  error: string | null;
}

// eslint-disable-next-line react/prop-types
export const ErrorNotification: React.FC<Props> = ({ error }) => {
  return (
    <div className="notification is-danger is-light error">
      {/* <button
        type="button"
        aria-label="CloseButton"
        className="delete"
      /> */}
      {`${error}`}
    </div>
  );
};
