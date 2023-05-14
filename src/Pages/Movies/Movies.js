import { getSearchMovie } from 'GetToMoviesInfo';
import { useEffect } from 'react';

import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, Input, List } from './Movies.stuled';

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
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="find your movie" />
        <Button type="submit">Search</Button>
      </Form>

      <ul>
        {movies.map(movie => {
          return (
            <List key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </List>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
