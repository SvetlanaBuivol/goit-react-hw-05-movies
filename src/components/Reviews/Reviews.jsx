import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieAPI';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const { results } = await getMovieReviews(movieId);
        if (!results.length) {
          return;
        }

        const reviewsArr = results.map(({ author, content, id }) => ({
          author,
          content,
          id,
        }));
        setReviews(reviewsArr);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      <ul>
        {reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <h3>We don't have any reviews for this movie</h3>
        )}
      </ul>
    </>
  );
}
