import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

import Logo from './components/Nav/NavChildrens/Logo';
import SearchInput from './components/Nav/NavChildrens/SearchInput';
import NumResult from './components/Nav/NavChildrens/NumResult';

import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

import Box from './components/Main/MainChildren/Box';
import WatchedSummary from './components/Main/MainChildren/WatchedSummary/WatchedSummary';
import WatchedMoviesList from './components/Main/MainChildren/MovieListStructure/MovieStructure/WatchedList/WatchedMoviesList';
import MovieListStructure from './components/Main/MainChildren/MovieListStructure/MovieListStructure';
import SelectedMovie from './components/SelectedMovie';

import { useEffect, useState } from 'react';

const tempMovieData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
];

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

/**
 * * API KEY
 * ! Note: we have used it out side of the component function each time component
 * ! gets rerendered and this variable will also be recreated, which is unnecassary
 */
const KEY = '1257a641';

// * movie to be searched
/* const temporaryQuery = [
  'fast and furious',
  'interstellar',
  'saw',
  'final destination',
  'disney',
  'annabelle',
  'ghoul',
  'home alone',
  'wrong turn',
  'walking dead',
  'fifty',
  'times',
];

const dummyRandomQuery = temporaryQuery[Math.floor(Math.random() * 12)]; */

export default function App() {
  // * displaying movies on left and right
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]); // added movies to watched list

  // * loader on movies section for slow internet connections
  const [loading, setLoading] = useState(false);

  // * handling error on ui when disconnect
  const [error, setError] = useState();

  // * search query for user to search movies
  const [query, setQuery] = useState('');
  // //console.log(query);

  /**
   * * selected movie to add on watch list
   * ? idea is to get an id and based on that id get more detailed movie
   * ? list from another api and fetch it on the right side
   */
  const [selectedMovieId, setSelectedMovieId] = useState(false);

  // * onClick func to go back from selected movie
  const onClickLeftArrow = function () {
    setSelectedMovieId(null);
  };

  // * id extractor function to get movie id on click
  const onClickMovieId = function (id) {
    setSelectedMovieId((prev) => (prev === id ? !prev : id));
  };

  // ! using useEffect to avoid infinite looping in render logic
  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error('something went wrong with fetching movies');

        const data = await res.json();

        if (data.Response === 'False') throw new Error('Movie not found');

        setMovies(data.Search);
        setError('');
        // //console.log(data.Search);
      } catch (err) {
        // //console.log(err);

        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }
    onClickLeftArrow();
    fetchMovies();

    // * clean up function
    return function () {
      controller.abort();
    };
  }, [query]);

  // ********* creating setup for watched movies ********* //

  // * selected movies by id
  const [movie, setMovie] = useState({});
  // //console.log(movie);

  // * add movie to watch list
  const addToWatchList = function (movie) {
    setWatched((prev) => [...prev, movie]);
  };

  // * loading effect on selected movie on right section
  const [isLoading, setIsLoading] = useState(false);

  // * delete watched moview btn (x)
  const deleteWatchedMovies = (id) => {
    setWatched(watched.filter((movies) => movies.imdbID !== id));
  };

  // ! will fetch new data for watched movies using id
  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieId}`
      );
      const data = await res.json();
      // //console.log(data);
      setMovie(data);
      setIsLoading(false);
    }

    getMovieDetails();
  }, [selectedMovieId]);

  return (
    <>
      <Nav>
        <Logo />
        <SearchInput setSearchValue={setQuery} searchValue={query} />
        <NumResult movies={movies} />
      </Nav>

      <Main>
        <Box>
          {loading && <Loader />}
          {!loading && !error && (
            <MovieListStructure
              movies={movies}
              onClickMovieId={onClickMovieId}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedMovieId ? (
            <SelectedMovie
              selectedMovieId={selectedMovieId}
              onClickLeftArrow={onClickLeftArrow}
              movie={movie}
              isLoading={isLoading}
              addToWatchList={addToWatchList}
              watchedArray={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteMovie={deleteWatchedMovies}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
