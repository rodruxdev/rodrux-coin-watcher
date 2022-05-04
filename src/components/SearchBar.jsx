import React from 'react';
import { MdSearch } from 'react-icons/md';
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
      <label htmlFor={control} className="search-bar__logo-container">
        <MdSearch className="search-bar__logo" />
      </label>
    </div>
  );
}

export default SearchBar;
