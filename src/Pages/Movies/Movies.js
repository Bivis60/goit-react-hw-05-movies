import { getSearchMovie } from 'GetToMoviesInfo';
import { useEffect } from 'react';

import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    const searchMovies = async () => {
      try {
        const { results } = await getSearchMovie(query);
        if (results.length === 0) {
          setMovies([]);
          toast.dismiss();
          toast.error('No movies found');
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };
    searchMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (query === '') {
      toast.error('Please enter something');
      setSearchParams({});
      return;
    }
    const form = e.currentTarget;
    setSearchParams({ query });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
