import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TvComponent } from './tv/tv.component';
import { NetworkComponent } from './network/network.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { favourite } from './favourite/favourite.component';
import { AllMoviesComponent } from './home/all-movies/all-movies.component';
import { ResorverDataStorageService } from './shared/movies-resorver.service';
import { LatestMoviesComponent } from './home/latest-movies/latest-movies.component';
import { MoviesDetailsComponent } from './home/all-movies/movies-details/movies-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: AllMoviesComponent,
        resolve: { movies: ResorverDataStorageService },
        outlet: 'primary',
      },
      {
        path: '',
        component: LatestMoviesComponent,
        outlet: 'secondary',
      },
    ],
  },
  {
    path: 'movies/:id',
    component: MoviesDetailsComponent,
    resolve: { movies: ResorverDataStorageService },
  },
  { path: 'favourite', component: favourite },
  { path: 'tv', component: TvComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'people', component: PeopleComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
