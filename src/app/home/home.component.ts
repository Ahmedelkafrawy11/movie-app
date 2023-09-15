import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { MoviesService } from './Movies.service';
import { Subject } from 'rxjs';
import { Movie } from './../shared/moviesFormat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private dataStorage: DataStorageService,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.dataStorage.fetchData().subscribe();
  }
}
