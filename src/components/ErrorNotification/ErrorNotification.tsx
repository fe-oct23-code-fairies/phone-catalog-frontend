import './ErrorNotification.scss';

interface Props {
  error: string;
}

export const ErrorNotification = ({ error }: Props) => {
  return (
    <div className="error error--margin-top">
      <p className="error__text">{`${error}`}</p>
    </div>
  );
};
