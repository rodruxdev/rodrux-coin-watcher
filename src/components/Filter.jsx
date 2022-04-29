import React from 'react';
import '../styles/components/Filter.css';

function Filter({ box, optionList }) {
  return (
    <select name="global" id="global" className={`${box}-box filter`}>
      <option value={optionList}>{optionList}</option>
    </select>
  );
}

export default Filter;
