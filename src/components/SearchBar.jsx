import React from 'react';
import { MdSearch, MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import '@styles/components/SearchBar.css';
import { updateSearch } from '../slices/uiSlice';

function SearchBar() {
  const [search, setSearch] = React.useState('');
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    if (event?.key === 'Enter') {
      if (search !== '') {
        dispatch(updateSearch(search));
      }
    }
  };

  const onSearchChange = (event) => {
    const reg = /([^A-Za-z])+/;
    let value = event?.target?.value;
    while (value.match(reg)) {
      value = value.replace(reg, '');
    }
    setSearch(value);
  };

  const onClean = () => {
    if (search !== '') {
      setSearch('');
    }
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        id="searchbar"
        placeholder="Bitcoin"
        className="search-bar__input"
        aria-label="search"
        value={search}
        onChange={onSearchChange}
        onKeyDown={handleSearch}
      />
      <label htmlFor="searchbar" className="search-bar__logo-container">
        {search !== '' ? (
          <button
            onClick={onClean}
            type="button"
            aria-label="clean search"
            className="search-bar__logo-button"
          >
            <MdClose className="search-bar__logo" data-testid="clean-icon" />
          </button>
        ) : (
          <MdSearch className="search-bar__logo" data-testid="search-icon" />
        )}
      </label>
    </div>
  );
}

export default SearchBar;
