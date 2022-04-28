import React from 'react';

function ExchangePair({ children }) {
  return (
    <div>
      <div>
        <img src="/" alt="Exchange Logo" />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default ExchangePair;
