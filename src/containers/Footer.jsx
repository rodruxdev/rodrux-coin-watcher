import React from 'react';
import CoingeckoMention from '../components/CoingeckoMention';
import SocialButton from '../components/SocialButton';
import '../styles/containers/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <CoingeckoMention />
      <ul className="footer__buttons">
        <SocialButton />
        <SocialButton />
        <SocialButton />
      </ul>
    </footer>
  );
}

export default Footer;
