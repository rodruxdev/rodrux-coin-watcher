import React from 'react';
import CoingeckoMention from '../components/CoingeckoMention';
import SocialButton from '../components/SocialButton';

function Footer() {
  return (
    <footer>
      <CoingeckoMention />
      <ul>
        <SocialButton />
        <SocialButton />
        <SocialButton />
      </ul>
    </footer>
  );
}

export default Footer;
