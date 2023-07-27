import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjhiYWRjMjMwODgzZjkwODc3ZjA0YjkzMzg4YzE2MiIsInN1YiI6IjY0YzEzZDIyMmYxYmUwMDEyZDkxM2M2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.87kGy0m8LKwU7rLB9Fu-QG9F6jP_TM1w6fEawWTAL5U',
  },
};

export function getTrendingMovies() {
  return axios.get(`${BASE_URL}trending/movie/day`, options);
}

export function getMovieByQuery({query}) {
  return axios.get(`${BASE_URL}search/movie?query=${query}`, options);
}

export function getMovieDetails(id) {
    return axios.get(`${BASE_URL}movie/${id}`, options)
}

export function getMovieCredits(id) {
    return axios.get(`${BASE_URL}movie/${id}/credits`, options)
}

export function getMovieReviews(id) {
    return axios.get(`${BASE_URL}movie/${id}/reviews`, options)
}