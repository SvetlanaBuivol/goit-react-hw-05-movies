import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movieAPI';
import MoviesList from 'components/Home/Home';
import Loader from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const { results } = await getTrendingMovies();
        const trendingMovies = results.map(({ title, id }) => ({
          title,
          id,
        }));
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <MoviesList state={{ from: location }} movies={movies} />
    </>
  );
}

export default Home;
