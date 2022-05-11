import React from 'react';
import '@styles/components/HeaderLogo.css';

function HeaderLogo() {
  return (
    <div className="header-logo">
      <div className="header-logo__logo">
        <img src="/" alt="Rodrux logo" />
      </div>
      <p>Cripto Watcher</p>
    </div>
  );
}

export default HeaderLogo;
