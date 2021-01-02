import {Injectable} from '@angular/core';
import {BehaviorSubject, forkJoin, Observable} from 'rxjs';
import {BaseHttpService} from '../../../shared/services/base-http/base-http.service';
import {MovieList} from '../../models/movies.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieListService extends BaseHttpService<MovieList> {

  private movieListSrc = new BehaviorSubject<MovieList>(this.setInitialValue());

  constructor(private http: HttpClient) {
    super(http);
  }

  public initializeTopMovies(): void {
    const extrasOne = {
      sort_by: 'popularity.desc',
      page: '1',
      region: 'US'
    };
    const extrasTwo = {
      sort_by: 'popularity.desc',
      page: '2',
      region: 'US'
    };
    const urlOne = super.setUrl('discover/movie', extrasOne);
    const urlTwo = super.setUrl('discover/movie', extrasTwo);
    // TODO: Add to local DB
    const sources = [
      super._get(urlOne),
      super._get(urlTwo)
    ];
    forkJoin(sources).subscribe(movies => {
      const arr1 = movies[0].results;
      const arr2 = movies[1].results;
      const allMovies = movies[0];
      allMovies.results = arr1.concat(arr2);
      this.movieListSrc.next(allMovies);
    });
  }

  public hasTopMovies(): boolean {
    return this.movieListSrc.getValue().results.length > 0;
  }

  public getMovies(): Observable<MovieList> {
    return this.movieListSrc.asObservable();
  }

  private setTopMovies(movies: MovieList): void {
    this.movieListSrc.next(movies);
  }

  private setInitialValue(): MovieList {
    return {
      results: [],
      total_results: 0,
      total_pages: 0,
      page: 1
    } as MovieList;
  }
}
