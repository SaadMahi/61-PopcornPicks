import React from 'react';

function SearchInput({ searchValue, setSearchValue }) {
  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
}

export default SearchInput;
