import Logo from './NavChildrens/Logo';
import SearchInput from './NavChildrens/SearchInput';
import NumResult from './NavChildrens/NumResult';

import React from 'react';

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <Logo />
      <SearchInput />
      <NumResult />
    </nav>
  );
};

export default Nav;
