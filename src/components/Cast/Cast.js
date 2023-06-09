import { getCast } from 'GetToMoviesInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CardBox, CardList, CardTitle } from './Cats.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const { cast } = await getCast(movieId);
        setCast(cast);
      } catch (error) {
        toast.error(error.message);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <CardBox>
      <CardTitle>Cast:</CardTitle>
      {cast.length ? (
        <CardList>
          {cast.map(el => (
            <li key={el.id}>
              {el.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                  alt={`${el.name}`}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${el.name}`}
                />
              )}
              <div>
                <h3>{el.name}</h3>
                <p>{el.character}</p>
              </div>
            </li>
          ))}
        </CardList>
      ) : (
        <p>There is no information about the actors for this film</p>
      )}
    </CardBox>
  );
};
