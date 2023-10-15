import React, { useEffect, useState } from 'react';

import Loader from './Loader';
import Star from './Star';

const SelectedMovie = ({
  selectedMovieId,
  onClickLeftArrow,
  movie,
  isLoading,
  addToWatchList,
  watchedArray,
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

  /**
   * * change browser title on movie selection
   * ! for changing title we have used useEffect as it is an interaction
   * ! with something that is outside of the react which is an sideEffect
   */
  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;
    },
    [title]
  );

  const handleAdd = function () {
    const newMovie = {
      imdbID: selectedMovieId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      userRating,
    };

    addToWatchList(newMovie);
    onClickLeftArrow();
  };

  // * pulling star value
  const [userRating, setUserRating] = useState('');

  // * if same movie is selected more than once or not
  const watchedMovies = watchedArray
    .map((movie) => movie.imdbID)
    .includes(selectedMovieId);
  // console.log(watchedMovies);

  // * user rated movie star display ui
  const watchedMovieUserRating = watchedArray.find(
    (movie) => movie.imdbID === selectedMovieId
  )?.userRating;
  // //console.log(watchedMovieUserRating);

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
              {!watchedMovies ? (
                <>
                  <Star
                    length={10}
                    starSize={22}
                    // messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
                    setUserRating={setUserRating}
                    rating={userRating}
                  />

                  {userRating > 0 && (
                    <button onClick={handleAdd} className='btn-add'>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You have already rated this movie {watchedMovieUserRating} ⭐
                </p>
              )}
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
