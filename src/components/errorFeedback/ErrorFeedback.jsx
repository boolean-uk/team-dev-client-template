import './errorFeedback.css';

const ErrorFeedback = ({ error }) => {
  return (
    <div className="error-feedback">
      <p>{error}</p>
    </div>
  );
};

export default ErrorFeedback;
