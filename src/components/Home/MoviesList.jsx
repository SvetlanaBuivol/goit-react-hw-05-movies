import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies, state }) {
  return (
    <ul>
      {movies &&
        movies.map(({id, title}) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={state}>{title}</Link>
          </li>
        ))}
    </ul>
  );
}
