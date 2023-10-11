import MovieStructure from './MovieStructure/MovieStructure';

// ! we will also move this data to App for setMovies state
/* const tempMovieData = [
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
]; */

const MovieListStructure = ({ movies }) => {
  /**
   * const [movies, setMovies] = useState(tempMovieData);
   * ! we are going to do prop drilling with this.
   * ! we need to lift the state to parent App component
   * ! then get it back here and we also need to pass it to NumResult
   * ? Flow of state:-
   * * lifted to app from movieList structure
   * * sent to main
   * * sent to movieList
   * * received back to movieListStructure
   * ? Flow of state for numResult
   * * lifted to app from movieList structure
   * * sent to nav
   * * sent to numResult
   * ? Conclusion
   * * pop drilling basically means that we need to pass
   * * some props through several nested child components
   * * in order to get that data into some deeply nested components
   * ? Note
   * * if props drilling goes to 5-10 level deep it would could get potentially out of control
   */

  return (
    <ul className='list'>
      {movies?.map((movie) => (
        <MovieStructure movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieListStructure;
