import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #555;
  text-decoration: none;
  padding: 10px;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }

  &.active {
    color: #333;
    font-weight: bold;
  }
`;
