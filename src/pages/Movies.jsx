import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';
import SearchInput from 'components/SearchInput/SearchInput';
import MoviesList from 'components/Home/MoviesList';
import { getMovieByQuery } from 'services/movieAPI';

function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const { results } = await getMovieByQuery({ query });
        console.log(results);

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
  }, [query]);

  const handleFormSubmit = querySearch => {
    setQuery(querySearch);
    setLoading(true);
    setMovies(null);
  };

  return (
    <>
      <SearchInput onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </>
  );
}

export default Movies;
