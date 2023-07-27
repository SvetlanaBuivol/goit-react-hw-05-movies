import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movieAPI';
import MovieDescription from 'components/MovieDetails/MovieDescription';
import Loader from 'components/Loader/Loader';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getMovieDetails(movieId)
        .then(({ data }) => {
            const { poster_path, title, release_date, genres, vote_average, overview} = data;
        setMovie({
          img: poster_path,
          title: title,
          releaseDate: release_date,
          genres: genres,
          rating: vote_average,
          overview: overview,
        });
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
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
