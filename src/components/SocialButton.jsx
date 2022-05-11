import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import '@styles/components/SocialButton.css';

const icons = {
  web: <MdWeb className="social-button__logo" />,
  github: <FaGithub className="social-button__logo" />,
  linkedin: <FaLinkedin className="social-button__logo" />,
};

function SocialButton({ box, icon }) {
  return (
    <li className={`${box}-box social-button`}>
      <a href="/" className="social-button__link">
        {icons[icon]}
      </a>
    </li>
  );
}

export default SocialButton;
