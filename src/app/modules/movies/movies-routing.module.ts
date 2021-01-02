import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoviesContainerComponent} from './components/movies-container/movies-container.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';


const routes: Routes = [
  {path: '', component: MoviesContainerComponent},
  {path: 'id/:movieId', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
