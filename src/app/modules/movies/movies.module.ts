import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import {SharedModule} from '../shared/shared.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


@NgModule({
  declarations: [MoviesContainerComponent, GenreListComponent, MovieListItemComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
