import React, { useState } from 'react';

import MovieListStructure from './MovieListStructure/MovieListStructure';

const MovieList = ({ movies }) => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? '–' : '+'}
      </button>
      {isOpen1 && <MovieListStructure movies={movies} />}
    </div>
  );
};

export default MovieList;
