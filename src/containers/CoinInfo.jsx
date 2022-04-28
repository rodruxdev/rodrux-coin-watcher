import React from 'react';

function CoinInfo({ children }) {
  return (
    <div>
      <h4>More Info</h4>
      <div>{children}</div>
    </div>
  );
}

export default CoinInfo;
