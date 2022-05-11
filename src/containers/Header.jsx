import React from 'react';
import CoingeckoMention from '@components/CoingeckoMention';
import HeaderLogo from '@components/HeaderLogo';
import '@styles/containers/Header.css';

function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <CoingeckoMention />
    </header>
  );
}

export default Header;
