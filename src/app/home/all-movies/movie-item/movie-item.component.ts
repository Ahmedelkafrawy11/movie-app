import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/shared/moviesFormat';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() movie: Movie;
  @Input() index: number;
}
