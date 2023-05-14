import { Suspense, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovie } from 'GetToMoviesInfo';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { title, release_date, vote_average, poster_path, overview, genres } =
    movieInfo;

  const posterSrc = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  useEffect(() => {
    const movieCard = async () => {
      try {
        const results = await getMovie(movieId);
        setMovieInfo(results);
      } catch (error) {
        toast.error(error.message);
      }
    };
    movieCard();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go to back</Link>
      <div>
        <img src={posterSrc} alt={`${title}`} />
        <h2>
          {title} ({release_date})
        </h2>
        <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
        <h3>Overview</h3>
        {overview ? <p>{overview}</p> : <p>No information</p>}

        {genres && genres.length > 0 && (
          <div>
            <h4>Genres</h4>
            <p>{genres.map(genre => genre.name).join(', ')}</p>
          </div>
        )}
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
