import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

import Logo from './components/Nav/NavChildrens/Logo';
import SearchInput from './components/Nav/NavChildrens/SearchInput';
import NumResult from './components/Nav/NavChildrens/NumResult';

import Loader from './components/Loader';

import Box from './components/Main/MainChildren/Box';
import WatchedSummary from './components/Main/MainChildren/WatchedSummary/WatchedSummary';
import WatchedMoviesList from './components/Main/MainChildren/MovieListStructure/MovieStructure/WatchedList/WatchedMoviesList';
import MovieListStructure from './components/Main/MainChildren/MovieListStructure/MovieListStructure';

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
const query = 'Fast and Furious';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  // * loader on movies section for slow internet connections
  const [loading, setLoading] = useState(false);

  // ! using useEffect to orevent infinite looping in render logic
  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search);
      setLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Nav>
        <Logo />
        <SearchInput />
        <NumResult movies={movies} />
      </Nav>

      <Main>
        <Box>
          {loading ? <Loader /> : <MovieListStructure movies={movies} />}
        </Box>

        <Box>
          <WatchedSummary watched={watched} />

          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
