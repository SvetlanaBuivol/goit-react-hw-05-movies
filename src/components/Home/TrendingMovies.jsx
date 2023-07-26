import React from "react";

export default function TrendingMovies({movies}) {

    return (
        <ul>
            {movies.map(movie => <li key={movie.id}>{ movie.title }</li>)}
        </ul>
    )
}