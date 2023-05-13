import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// import { useEffect } from "react";

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  console.log(movieId);
  console.log(location);
  console.log(backLinkLocationRef);


  // useEffect(() => {});

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go to back</Link>
      <h2>MoviesDetails: {movieId}</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
