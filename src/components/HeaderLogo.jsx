import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/components/HeaderLogo.css';
import logo from '@images/logo-oscuro.svg';

function HeaderLogo() {
  return (
    <Link className="header-logo" to="/">
      <div className="header-logo__logo">
        <img src={`${logo}`} alt="Rodrux logo" />
      </div>
      <p>Cripto Watcher</p>
    </Link>
  );
}

export default HeaderLogo;
