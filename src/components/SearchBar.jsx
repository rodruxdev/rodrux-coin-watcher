import React from 'react';
import '../styles/components/SearchBar.css';

function SearchBar() {
  const control = 'searchbar';
  return (
    <div className="search-bar">
      <input
        type="search"
        id={control}
        placeholder="Bitcoin"
        className="search-bar__input"
      />
      <label htmlFor={control} className="search-bar__logo">
        <div />
      </label>
    </div>
  );
}

export default SearchBar;
