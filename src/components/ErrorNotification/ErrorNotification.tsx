interface Props {
  error: string | null
}

// eslint-disable-next-line react/prop-types
export const ErrorNotification: React.FC<Props> = ({ error }) => {
  return <div>{`${error}`}</div>;
};
