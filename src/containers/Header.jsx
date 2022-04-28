import React from 'react';
import CoingeckoMention from '../components/CoingeckoMention';
import HeaderLogo from '../components/HeaderLogo';

function Header() {
  return (
    <header>
      <HeaderLogo />
      <CoingeckoMention />
    </header>
  );
}

export default Header;
