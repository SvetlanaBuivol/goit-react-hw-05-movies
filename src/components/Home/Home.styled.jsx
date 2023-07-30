import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import imgDefault from  '../../imgDefault/qwe.jpg';

export const MoviesListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

export const MovieItem = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  background-image: url(${imgDefault});
  background-size: cover;
  background-position: center;
  backdrop-filter: blur 5px;  
   transition: background-blur 0.3s ease;
  
  &:hover {
    backdrop-filter: blur 10px; 
  }
`;