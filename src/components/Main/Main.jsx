import React from 'react';

import MovieList from './MainChildren/MovieList';
import WatchedMovie from './MainChildren/WatchedMovie';

const Main = () => {
  return (
    <main className='main'>
      <MovieList />
      <WatchedMovie />
    </main>
  );
};

export default Main;
