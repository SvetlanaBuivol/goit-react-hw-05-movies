import React from "react";

export default function MovieDescription({ movie }) {
    if (!movie) {
        return null;
    }
    const { releaseDate, img, genres, title, rating, overview } = movie;
    const movieYear = releaseDate?.split('-')[0];
    const imageUrl = img ? `https://image.tmdb.org/t/p/w500${img}` : "";
    const releasDate = releaseDate?.split('-').join('/');
    const movieGenres = genres?.map(genre => genre.name).join(', ').toLowerCase();
    
    return ( 
        <div>
            <img src={imageUrl} alt="" />
            <h1>{title} ({movieYear})</h1>
            <p>{releasDate}</p>
            <p>{movieGenres}</p>
            <p>Rating: {rating}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    )
}

// genres
// : 
// (3) [{…}, {…}, {…}]
// img
// : 
// "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
// overview
// : 
// "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans."
// rating
// : 
// 7.634
// releaseDate
// : 
// "2023-07-19"
// title
// : 
// "Barbie"