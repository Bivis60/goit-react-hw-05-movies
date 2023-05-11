import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();

  useEffect(() => {}, []);

  return <h3>Cast... {movieId}</h3>;
};
