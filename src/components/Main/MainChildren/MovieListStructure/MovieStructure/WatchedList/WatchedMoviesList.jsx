import React from 'react';

import WatchedMovieStructure from './WatchedMovieStructure/WatchedMovieStructure';

const WatchedMoviesList = ({ watched, onDeleteMovie }) => {
  return (
    <ul className='list modify--list'>
      {watched.map((movie) => (
        <WatchedMovieStructure
          movie={movie}
          key={movie.imdbID}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
