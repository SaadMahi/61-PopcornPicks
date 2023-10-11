import Logo from './NavChildrens/Logo';
import SearchInput from './NavChildrens/SearchInput';
import NumResult from './NavChildrens/NumResult';

import React from 'react';

const Nav = ({ movies }) => {
  return (
    <nav className='nav-bar'>
      <Logo />
      <SearchInput />
      <NumResult movies={movies} />
    </nav>
  );
};

export default Nav;
