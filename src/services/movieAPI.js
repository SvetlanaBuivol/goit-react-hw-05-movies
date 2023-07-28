import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjhiYWRjMjMwODgzZjkwODc3ZjA0YjkzMzg4YzE2MiIsInN1YiI6IjY0YzEzZDIyMmYxYmUwMDEyZDkxM2M2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.87kGy0m8LKwU7rLB9Fu-QG9F6jP_TM1w6fEawWTAL5U',
  },
};

export async function getTrendingMovies() {
    try {
    const response = await axios.get(`${BASE_URL}trending/movie/day`, options);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getMovieByQuery({ query }) {
  try {
    const response = await axios.get(`${BASE_URL}search/movie?query=${query}`, options);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getMovieDetails(id) {
    try {
        const response = await axios.get(`${BASE_URL}movie/${id}`, options)
        return response.data;
    } catch (error) {
        throw new Error(error.massage);
    }
}

export async function getMovieCredits(id) {
    try {
        const response = await axios.get(`${BASE_URL}movie/${id}/credits`, options)
        return response.data;
    } catch (error) {
        throw new Error(error.massage);
    }
}

export async function getMovieReviews(id) {
    try {
        const response = await axios.get(`${BASE_URL}movie/${id}/reviews`, options)
        return response.data;
    } catch (error) {
        throw new Error(error.massage);
    }
}