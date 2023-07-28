import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader/Loader';

export function Layout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
          </Suspense>
      </main>
    </div>
  );
}
