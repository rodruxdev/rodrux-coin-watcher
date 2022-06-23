import React from 'react';
import { MdSwapVert } from 'react-icons/md';
import '@styles/components/SwitchButton.css';

function SwitchButton() {
  return (
    <div className="switch">
      <MdSwapVert className="switch__icon" />
    </div>
  );
}

export default SwitchButton;
