import React from 'react';
import '../styles/components/SocialButton.css';

function SocialButton() {
  return (
    <li className="blue-box social-button">
      <a href="/" className="social-button__link">
        <div className="social-button__logo">Icon</div>
      </a>
    </li>
  );
}

export default SocialButton;
