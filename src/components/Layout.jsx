import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import { HeaderContainer, Nav, NavLinkStyled } from './Layout.styled';

export function Layout() {
  return (
    <div>
      <HeaderContainer>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="movies">Movies</NavLinkStyled>
        </Nav>
      </HeaderContainer>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
          </Suspense>
      </main>
    </div>
  );
}
