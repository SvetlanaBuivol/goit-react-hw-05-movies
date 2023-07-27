import { NavLink, Outlet } from 'react-router-dom';

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
        <Outlet />
      </main>
    </div>
  );
}
