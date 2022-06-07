import React from 'react';
import '@styles/components/HeaderLogo.css';
import logo from '@images/logo-oscuro.svg';

function HeaderLogo() {
  return (
    <div className="header-logo">
      <div className="header-logo__logo">
        <img src={`${logo}`} alt="Rodrux logo" />
      </div>
      <p>Cripto Watcher</p>
    </div>
  );
}

export default HeaderLogo;
