import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
      .then(resp => {
        setMovie({
          img: resp.data.poster_path,
          title: resp.data.title,
          releaseDate: resp.data.release_date,
          genres: resp.data.genres,
          rating: resp.data.vote_average,
          overview: resp.data.overview,
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
    </>
  );
}

export default MovieDetails;
