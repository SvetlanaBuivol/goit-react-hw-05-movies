import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movieAPI';
import MovieDescription from 'components/MovieDetails/MovieDescription';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieDetails(movieId).then(resp => {
      setMovie({
        img: resp.data.poster_path,
        title: resp.data.title,
        releaseDate: resp.data.release_date,
        genres: resp.data.genres,
        rating: resp.data.vote_average,
        overview: resp.data.overview,
      });
    });
  }, [movieId]);

    return (
        <MovieDescription movie={movie} />
    );
}

export default MovieDetails;
