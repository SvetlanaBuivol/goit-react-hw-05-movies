import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieAPI';
import { NoReviewsMessage, ReviewAuthor, ReviewContent, ReviewItem, ReviewsContainer } from './Reviews.styled';

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
    <ReviewsContainer>
      {loading && <Loader />}
      <ul>
        {reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <ReviewAuthor>Author: {author}</ReviewAuthor>
              <ReviewContent>{content}</ReviewContent>
            </ReviewItem>
          ))
        ) : (
          <NoReviewsMessage>We don't have any reviews for this movie</NoReviewsMessage>
        )}
      </ul>
    </ReviewsContainer>
  );
}
