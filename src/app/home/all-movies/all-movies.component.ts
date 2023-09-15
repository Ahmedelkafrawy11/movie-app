import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Movies.service';
import { Movie } from 'src/app/shared/moviesFormat';
import { DataStorageService } from './../../shared/data-storage.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
})
export class AllMoviesComponent implements OnInit {
  public movies: Movie[] = [];
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private datastorage: DataStorageService
  ) {}

  ngOnInit() {
    this.movies = this.moviesService.MoviesArray;
  }
}
