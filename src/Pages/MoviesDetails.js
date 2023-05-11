import { Link, Outlet, useParams } from 'react-router-dom';
// import { useEffect } from "react";

const MoviesDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  // useEffect(() => {});

  return (
    <>
      <h2>MoviesDetails: {movieId}</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  );
};

export default MoviesDetails;
