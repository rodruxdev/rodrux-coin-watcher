import React from 'react';
import '../styles/components/CoinConversion.css';

function CoinConversion() {
  return (
    <div className="input-convertor">
      <input
        type="number"
        min="0"
        value={1}
        className="input-convertor__input"
        aria-label="coin convertor"
      />
    </div>
  );
}

export default CoinConversion;
