import React, { useRef } from 'react';
import imgDefault from '../../imgDefault/noImageAvailable.jpg';
import {
  BackIcon,
  GoBackLink,
  MovieDetailsContainer,
  MovieDetailsContent,
  MovieGenres,
  MovieImage,
  MovieInfo,
  MovieReleaseDate,
  MovieTitle,
  MovieYear,
  NavigationLinkItem,
  NavigationLinks,
  OverviewHeading,
  OverviewText,
  Rating,
} from './MovieDescription.styled';
import { Link, useLocation } from 'react-router-dom';

export default function MovieDescription({ movie }) {
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/');

  if (!movie) {
    return null;
  }

  const { releaseDate, img, genres, title, rating, overview } = movie;
  const movieYear = releaseDate?.split('-')[0];
  const imageUrl = img ? `https://image.tmdb.org/t/p/w500${img}` : imgDefault;
  const releasDate = releaseDate?.split('-').join('/');
  const movieGenres = genres
    ?.map(genre => genre.name)
    .join(', ')
    .toLowerCase();
  

  return (
    <MovieDetailsContainer>
      <GoBackLink to={backLocationRef.current}><BackIcon/>Go back</GoBackLink>
      <MovieDetailsContent>
        <MovieImage>
          <img src={imageUrl} alt="" />
          </MovieImage>
      <MovieInfo>
        <MovieTitle>
          {title} <MovieYear>({movieYear})</MovieYear>
        </MovieTitle>
        <MovieReleaseDate>{releasDate}</MovieReleaseDate>
        <MovieGenres>{movieGenres}</MovieGenres>
        <Rating>Rating: {rating}</Rating>
        <OverviewHeading>Overview</OverviewHeading>
        <OverviewText>{overview}</OverviewText>
        </MovieInfo>
      </MovieDetailsContent>
      <NavigationLinks>
        <NavigationLinkItem>
          <Link to="cast">Cast</Link>
        </NavigationLinkItem>
        <NavigationLinkItem>
          <Link to="reviews">Reviews</Link>
        </NavigationLinkItem>
      </NavigationLinks>
    </MovieDetailsContainer>
  );
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
