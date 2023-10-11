import React from 'react';

import WatchedMovieStructure from './WatchedMovieStructure/WatchedMovieStructure';

const WatchedMoviesList = ({ watched }) => {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovieStructure movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
