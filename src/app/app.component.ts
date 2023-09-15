import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movie';

  constructor(
    private router: Router,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
  
  }

  loadingHomeComponent() {
    this.router.navigate(['./']);
  }
}
