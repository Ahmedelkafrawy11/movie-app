import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/shared/moviesFormat';
import { MoviesService } from '../../Movies.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss'],
})
export class MoviesDetailsComponent implements OnInit {
  movieDetailed: Movie;
  id: number;
  adult: boolean;
  release_date: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private moviesService: MoviesService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
      this.movieDetailed = this.moviesService.getMoviesById(this.id);
    });
    this.adult = this.movieDetailed.adult;
    this.release_date =
      this.datePipe.transform(this.movieDetailed.release_date, 'yyyy-MM-dd') ??
      'N/A';
  }
}
