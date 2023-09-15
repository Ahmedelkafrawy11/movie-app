import { Movie } from './moviesFormat';

export class backendData {
  public message: string;
  public movies: Movie[];
  constructor(message: string, movies: Movie[]) {
    this.movies = movies;
    this.message = message;
  }
}
