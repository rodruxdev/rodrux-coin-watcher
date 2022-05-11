import React from 'react';
import CoingeckoMention from '@components/CoingeckoMention';
import SocialButton from '@components/SocialButton';
import '@styles/containers/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <CoingeckoMention />
      <ul className="footer__buttons">
        <SocialButton box="blue" icon="web" />
        <SocialButton box="orange" icon="github" />
        <SocialButton box="blue" icon="linkedin" />
      </ul>
    </footer>
  );
}

export default Footer;
