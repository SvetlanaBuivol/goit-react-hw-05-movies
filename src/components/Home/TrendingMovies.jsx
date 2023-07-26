import React from "react";
import { Link } from "react-router-dom";

export default function TrendingMovies({movies}) {

    return (
        <ul>
            {movies.map(movie => <li key={movie.id}><Link to={`movies/${movie.id}`}>{ movie.title }</Link></li>)}
        </ul>
    )
}