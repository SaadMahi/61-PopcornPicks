import React from 'react';

import Loader from './Loader';
import Star from './Star';

const SelectedMovie = ({
  selectedMovieId,
  onClickLeftArrow,
  movie,
  isLoading,
}) => {
  // * setting fetched movies data's custom key
  const {
    Title: title,
    Year: year,
    Rated: rated,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    Director: director,
    Actors: actors,
    Plot: plot,
    Poster: poster,
    imdbRating,
  } = movie;
  // //console.log(movie);

  return (
    <div className='details'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button onClick={onClickLeftArrow} className='btn-back'>
              ⬅️
            </button>
            <img src={poster} alt={`poster of ${movie} movie`} />
            <div className='details-overview'>
              <h1>{title}</h1>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className='rating'>
              <Star
                length={10}
                starSize={24}
                // messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
              />
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default SelectedMovie;
