import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'GetToMoviesInfo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { Title, List } from './Home.stuled';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const searchTrendingMovies = async () => {
      try {
        setError(false);
        const { results } = await getTrendingMovies();
        setMoviesList(results);
      } catch (error) {
        setError(true);
      }
    };

    searchTrendingMovies();
  }, []);

  return (
    <>
      {error && toast.error('Please enter a value !')}
      <section>
        <Title>The most popular movies today!</Title>

        <ul>
          {moviesList.map(movie => {
            return (
              <List key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </List>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Home;
