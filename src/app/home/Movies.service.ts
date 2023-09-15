import { Injectable, OnInit } from '@angular/core';
import { Movie } from '../shared/moviesFormat';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService implements OnInit {
  public MoviesArray: Movie[];

  ngOnInit() {}
  setMovies(movies: Movie[]) {
    this.MoviesArray = movies;
  }

  getMoviesById(id: number) {
    return this.MoviesArray[id];
  }
}
