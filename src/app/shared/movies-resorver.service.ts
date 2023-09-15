import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { MoviesService } from '../home/Movies.service';
import { Movie } from './moviesFormat';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { backendData } from './backendData';

@Injectable({
  providedIn: 'root',
})
export class ResorverDataStorageService implements Resolve<backendData> {
  constructor(
    private dataStorage: DataStorageService,
    private moviesService: MoviesService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<backendData> {
    return this.dataStorage.fetchData();
  }
}
