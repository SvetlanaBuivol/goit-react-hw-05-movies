import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';
import SearchInput from 'components/SearchInput/SearchInput';
import MoviesList from 'components/Home/MoviesList';
import { getMovieByQuery } from 'services/movieAPI';
import { MoviesContext } from 'Context/Context';

function Movies() {
  const [query, setQuery] = useState('');
  const { movies, setMovies } = useContext(MoviesContext);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const { results } = await getMovieByQuery({ query });

        if (!results.length) {
          Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.',
            { position: 'center-center' }
          );
          return;
        }
        const moviesByQuery = results.map(({ title, id }) => ({
          title,
          id,
        }));
        setMovies(moviesByQuery);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, setMovies]);

  const handleFormSubmit = querySearch => {
    setQuery(querySearch);
    setLoading(true);
    setMovies(null);
  };

  return (
    <>
      <SearchInput onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {movies && <MoviesList state={{ from: location }} movies={movies} />}
    </>
  );
}

export default Movies;
