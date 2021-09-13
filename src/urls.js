import {API_KEY} from './constants/constants'
export const trending = { fetchTrending :`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,};
export const originals =`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const Tvlatest =`https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=en-US`;
export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const Horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const Comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const Romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentaries = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`;
export const movielatest ={ fetchMovielatest :`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,};
export const movienow = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
export const moviepopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const movietop =`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const movielat =`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const populartv =`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const tvonair =`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&page=1&language=en-US`;
export const tvtoprated ={ fetchToprated :`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`};
export const Tvtoprated =`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const Tvrec =`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`;
