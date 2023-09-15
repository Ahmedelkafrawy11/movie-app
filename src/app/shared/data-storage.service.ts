import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs';
import { MoviesService } from '../home/Movies.service';
import { backendData } from './backendData';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private movies: MoviesService) {}

  fetchData() {
    return this.http.get<backendData>('http://localhost:3000/movies').pipe(
      tap((movies) => {
        this.movies.setMovies(movies.movies);
      })
    );
  }
}
