import React from 'react';
import { MdSwapVert } from 'react-icons/md';
import '../styles/components/SwitchButton.css';

function SwitchButton() {
  return (
    <button type="button" className="switch">
      <MdSwapVert className="switch__icon" />
    </button>
  );
}

export default SwitchButton;
