import { getReviews } from 'GetToMoviesInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
        console.log(results);
      } catch (error) {
        toast.error(error.message);
      }
    };
    movieReviews();
  }, [movieId]);
  console.log(reviews);

  return (
    <div>
      <h3>Reviews:</h3>

      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <div>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews for this movies</p>
      )}
    </div>
  );
};
