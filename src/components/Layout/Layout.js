import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { List, ListText, Ul } from './Layout.stuled';

export const Layout = () => {
  return (
    <>
      <header>
        <Ul>
          <List>
            <ListText to="/">home</ListText>
          </List>
          <List>
            <ListText to="/movies">movies</ListText>
          </List>
        </Ul>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
