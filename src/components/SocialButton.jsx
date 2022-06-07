/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import '@styles/components/SocialButton.css';

const types = {
  web: {
    icon: <MdWeb className="social-button__logo" />,
    link: 'https://www.rodrux.com/',
    rel: '',
  },
  github: {
    icon: <FaGithub className="social-button__logo" />,
    link: 'https://github.com/rodruxdev',
    rel: 'noreferrer',
  },
  linkedin: {
    icon: <FaLinkedin className="social-button__logo" />,
    link: 'https://www.linkedin.com/in/rodrigo-goitia/',
    rel: 'noreferrer',
  },
};

function SocialButton({ box, type }) {
  const { icon, link, rel } = types[type] || types.web;
  return (
    <li className={`${box}-box social-button`}>
      <a href={link} className="social-button__link" target="_blank" rel={rel}>
        {icon}
      </a>
    </li>
  );
}

export default SocialButton;
