import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movieAPI';
import MovieDescription from 'components/MovieDetails/MovieDescription';
import Loader from 'components/Loader/Loader';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log("MovieDetails  location", location)

  useEffect(() => {
    const fetchData = async () => {
    setLoading(true);

      try {
        const { poster_path, title, release_date, genres, vote_average, overview } = await getMovieDetails(movieId);
        setMovie({
          img: poster_path,
          title,
          releaseDate: release_date,
          genres,
          rating: vote_average,
          overview,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      <Link to={location.state.from}>Go back</Link>
      <MovieDescription movie={movie} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default MovieDetails;
