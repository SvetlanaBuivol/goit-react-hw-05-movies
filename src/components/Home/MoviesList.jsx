import React from 'react';
import { MoviesListContainer, MovieLink, MovieItem } from './Home.styled';

export default function MoviesList({ movies, state }) {
  return (
    <MoviesListContainer>
      {movies &&
        movies.map(({id, title}) => (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={state}>{title}</MovieLink>
          </MovieItem>
        ))}
    </MoviesListContainer>
  );
}
