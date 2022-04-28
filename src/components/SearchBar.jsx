import React from 'react';

function SearchBar() {
  const control = 'searchbar';
  return (
    <div>
      <label htmlFor={control}>
        <div />
      </label>
      <input type="search" id={control} placeholder="Bitcoin" />
    </div>
  );
}

export default SearchBar;
