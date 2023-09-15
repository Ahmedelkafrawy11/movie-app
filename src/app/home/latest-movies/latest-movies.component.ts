import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MoviesService } from '../Movies.service';
import { Movie } from 'src/app/shared/moviesFormat';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss'],
})
export class LatestMoviesComponent implements OnInit {
  public movies: Movie[] = [];
  private intervalId: any;
  private scrollingRight = true;

  @ViewChild('scrollableImages', { static: false })
  scrollableImages!: ElementRef;

  constructor(
    private moviesService: MoviesService,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit() {
    this.movies = this.moviesService.MoviesArray;
    this.startAutoScroll();
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      if (this.scrollingRight) {
        this.scrollRight();
      } else {
        this.scrollLeft();
      }
    }, 2000);
  }

  stopAutoScroll() {
    clearInterval(this.intervalId);
  }

  scrollLeft() {
    this.scrollableImages.nativeElement.scrollBy({
      left: -100,
      behavior: 'smooth',
    });
    this.scrollingRight = false;
  }

  scrollRight() {
    this.scrollableImages.nativeElement.scrollBy({
      left: 100,
      behavior: 'smooth',
    });
    this.scrollingRight = true;
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }
}
