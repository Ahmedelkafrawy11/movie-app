import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TvComponent } from './tv/tv.component';
import { NetworkComponent } from './network/network.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { favourite } from './favourite/favourite.component';
import { LatestMoviesComponent } from './home/latest-movies/latest-movies.component';
import { AllMoviesComponent } from './home/all-movies/all-movies.component';
import { LoginComponent } from './auth/login/login.component';
import { MovieItemComponent } from './home/all-movies/movie-item/movie-item.component';
import { MoviesDetailsComponent } from './home/all-movies/movies-details/movies-details.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TvComponent,
    NetworkComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotfoundComponent,
    PeopleComponent,
    favourite,
    LatestMoviesComponent,
    AllMoviesComponent,
    MovieItemComponent,
    MoviesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
