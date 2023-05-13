// import { useEffect } from "react";

import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'Movies-1',
    'Movies-2',
    'Movies-3',
    'Movies-4',
    'Movies-5',
    'Movies-6',
    'Movies-7',
    'Movies-8',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  console.log(query);

  // useEffect(() => {});

  const updateQueryString = e => {
    const value = e.target.value;
    value === '' ? setSearchParams({}) : setSearchParams({ query: value });
  };

  const visibleMovies = movies.filter(movie =>
    movie.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = e => {
    e.preventDefault();
    console.log(query);
    const form = e.currentTarget;
    form.reset();
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   setSearchParams({ query: form.elements.query.value });
  //   form.reset();
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name={query} onChange={updateQueryString} />
        <button type="submit">Search</button>
      </form>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form> */}
      <ul>
        {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
