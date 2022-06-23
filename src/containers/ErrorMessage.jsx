import React from 'react';
import '@styles/containers/ErrorMessage.css';

function ErrorMessage() {
  return (
    <div className="error">
      <h1 className="error__error">Oops!</h1>
      <h2 className="error__title">
        It seems we have an error fetching the data
      </h2>
      <p className="error__text">Please try re-loading the page</p>
    </div>
  );
}

export default ErrorMessage;
