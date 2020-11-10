import axios from 'axios';

export class MoviesService {
  static apiKey = 'd416af5d4faee64e25ab001d87aab5c3';

  static _withBaseUrl(path) {
    return `https://api.themoviedb.org/3/${path}?api_key=${MoviesService.apiKey}`;
  }

  static getMovieById(movieId) {
    return axios(MoviesService._withBaseUrl(`movie/${movieId}`));
  }

  static getPopularMovies() {
    return axios(MoviesService._withBaseUrl('movie/popular'));
  }
}
