import React from 'react';

import MovieList from './MainChildren/MovieList';
import WatchedMovie from './MainChildren/WatchedMovie';

const Main = ({ movies }) => {
  return (
    <main className='main'>
      <MovieList movies={movies} />
      <WatchedMovie />
    </main>
  );
};

export default Main;
