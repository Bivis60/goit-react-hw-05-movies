import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';
import { lazy } from 'react';
import { GlobalStyle } from 'GlobalStyles';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('../Pages/MoviesDetails/MoviesDetails'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};
