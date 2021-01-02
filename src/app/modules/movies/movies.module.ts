import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';


@NgModule({
  declarations: [MoviesContainerComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
