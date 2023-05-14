import { getReviews } from 'GetToMoviesInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ReviewsAuthor,
  ReviewsBox,
  ReviewsTitle,
  Reviewslist,
} from './Reviews.stuled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
      } catch (error) {
        toast.error(error.message);
      }
    };
    movieReviews();
  }, [movieId]);

  return (
    <div>
      <ReviewsTitle>Reviews:</ReviewsTitle>

      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <Reviewslist key={review.id}>
              <ReviewsBox>
                <ReviewsAuthor>{review.author}</ReviewsAuthor>
                <p>{review.content}</p>
              </ReviewsBox>
            </Reviewslist>
          ))}
        </ul>
      ) : (
        <p>There are no reviews for this movies</p>
      )}
    </div>
  );
};
