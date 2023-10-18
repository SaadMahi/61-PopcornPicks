import React, { useEffect, useState } from 'react';

import Loader from './Loader';
import Star from './Star';
import useKey from './Custom Hooks/useKey';

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

      return function () {
        document.title = 'PopcornsPicks';
      };
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

  /** Adding escape key to go back alternate of click <- arrow
   * * adding escape key feature so we can go back using ESC key in watched movie right section
   * * for that we will use useEffect as it will give us power to manupulate in DOM
   * * this means we are stepping outside the React therefore the reason this useEffect is also known as escape hatch
   * * so that's basically escaping, having to write all the code in React way
   * ! next thing we noticed is that error keeps on accumulating the document.addEventListener on concole,
   * ! we get dozens of log of escaped
   * ! therefore we require clean up which will avoid accumulating it
   * * well the actual reason is that when the movie mounts a new event listner is added to the document
   * * basically a additional one to the ones we already have, so each time the effect is executed
   * * it will add one more event listener to the document, so if we open up 10 movies and then close them all
   * * we will end up with 10 same event listeners attached to the document which is not a good idea.
   * * therefore we need to clean up our event listeners
   
  // !!! MOVED THE WHOLE CODE TO CUSTOM HOOK !!! \\
  useEffect(() => {
    const esc = (e) => {
      if (e.code === 'Escape') {
        onClickLeftArrow();
        // //console.log('escaped');
      }
    };

    document.addEventListener('keydown', esc);

    return function () {
      document.removeEventListener('keydown', esc); // ! as soon as the movie details compo unmounts the event listener will be removed from the document
    };
  }, []);
*/

  useKey('Escape', onClickLeftArrow);

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
