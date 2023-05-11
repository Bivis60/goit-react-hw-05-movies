import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();

  useEffect(() => {}, []);

  return <h3>Reviews...{movieId}</h3>;
};
