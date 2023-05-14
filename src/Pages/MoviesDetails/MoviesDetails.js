import { Suspense, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovie } from 'GetToMoviesInfo';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { Box, ButtonLink, GenresTitle, Image, Info, List, Overview, Section, Title, UserScore } from './MoviesDetails.stuled';

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { title, release_date, vote_average, poster_path, overview, genres } =
    movieInfo;

  const posterSrc = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : 'https://via.placeholder.com/300x450.png?text=Poster+Not+Available';

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
      <ButtonLink to={backLinkLocationRef.current}>Go to back</ButtonLink>

      <Section>
        <Image src={posterSrc} alt={`${title}`} />
        <Box>
          <Title>
            {title} ({release_date})
          </Title>
          <UserScore>User Score: {(vote_average * 10).toFixed(0)}%</UserScore>
          <Overview>Overview</Overview>
          {overview ? <Info>{overview}</Info> : <Info>No information</Info>}

          {genres && genres.length > 0 && (
            <div>
              <GenresTitle>Genres</GenresTitle>
              <p>{genres.map(genre => genre.name).join(', ')}</p>
            </div>
          )}
        </Box>
      </Section>
      <ul>
        <List>
          <Link to="cast">Cast</Link>
        </List>
        <List>
          <Link to="reviews">Reviews</Link>
        </List>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
