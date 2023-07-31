import React from 'react';
import { MoviesListContainer, MovieLink, MovieItem } from './Home.styled';
import { useLocation } from 'react-router-dom';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <MoviesListContainer>
      {movies &&
        movies.map(({ id, title }) => (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{from: location}}>
              {title}
            </MovieLink>
          </MovieItem>
        ))}
    </MoviesListContainer>
  );
}
