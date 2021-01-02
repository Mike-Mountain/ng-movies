import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './modules/core/components/landing/landing.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)},
  {path: '', pathMatch: 'full', redirectTo: 'landing'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
