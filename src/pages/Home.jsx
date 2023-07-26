import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movieAPI';
import TrendingMovies from 'components/Home/TrendingMovies';
import Loader from 'components/Loader/Loader';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTrendingMovies()
      .then(response => {
        const trendingMovies = response.data.results.map(movie => ({
          title: movie.title,
          id: movie.id,
        }));
        setMovies(trendingMovies);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loader />}
      <TrendingMovies movies={movies} />
    </>
  );
}

export default Home;
