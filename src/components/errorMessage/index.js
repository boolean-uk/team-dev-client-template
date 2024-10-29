import './_errorMessage.css';

const ErrorMessage = ({ message }) => {
  return <div className={`simple-error-message`}>{message}</div>;
};

export default ErrorMessage;
