import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/movieAPI";

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getMovieReviews(movieId).then(({data}) => {
            console.log(data.results)
            if (!data.results.length) {
                return;
            }

            const reviewsArr = data.results.map(({author, content, id}) => ({
                author,
                content,
                id,
            }))
            setReviews(reviewsArr);
        })
    }, [movieId])
  
    return (
        <ul>
            {reviews.length ? reviews.map(({ id, author, content }) => <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
            </li>) : <h3>We don't have any reviews for this movie</h3>}
        </ul>
    )
}