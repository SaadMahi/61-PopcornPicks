import React from 'react';

const WatchedMovieStructure = ({ movie, onDeleteMovie }) => {
  // //console.log(movie);
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.Title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          onClick={() => onDeleteMovie(movie.imdbID)}
          className='btn-delete'
        >
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedMovieStructure;
