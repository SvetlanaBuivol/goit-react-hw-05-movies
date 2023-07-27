import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movieAPI';
import Loader from 'components/Loader/Loader';
import CastItem from 'components/CastItem/CastItem';

export default function CastList() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getMovieCredits(movieId)
      .then(({ data }) => {
        const { cast } = data;

        const actorsArray = cast.map(
          ({ profile_path, original_name, character, cast_id }) => ({
            img: profile_path,
            name: original_name,
            character: character,
            id: cast_id,
          })
        );
        setActors(actorsArray);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {actors.map(actor => (
          <CastItem key={actor.id} actor={actor} />
        ))}
      </ul>
    </div>
  );
}
