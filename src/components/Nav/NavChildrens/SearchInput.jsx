import React, { useEffect, useRef } from 'react';

function SearchInput({ searchValue, setSearchValue }) {
  const inputEl = useRef();

  useEffect(() => {
    // //console.log(inputEl.current);

    // * reason to use this separate call back function is so we can clean up after our event
    const searchInputFocus = function (e) {
      // ! when your input element is active it will simply return instead of making your query empty
      if (document.activeElement === inputEl.current) return;

      if (e.code === 'Enter') {
        inputEl.current.focus();
        setSearchValue('');
      }
    };

    document.addEventListener('keydown', searchInputFocus);

    // ! clean up function
    return () => {
      document.removeEventListener('keydown', searchInputFocus);
    };
  }, [setSearchValue]);

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      ref={inputEl}
    />
  );
}

export default SearchInput;
