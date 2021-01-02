import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {BaseHttpService} from '../../../shared/services/base-http.service';
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
    const extras = {
      sort_by: 'popularity.desc',
      page: '1',
      region: 'US'
    };
    const url = super.setUrl('discover/movie', extras);
    // TODO: Add to local DB
    super._get(url).subscribe(movies => {
      this.setTopMovies(movies);
    });
  }

  public hasTopMovies(): boolean {
    return this.movieListSrc.getValue().results.length > 0;
  }

  public getMovies(): Observable<MovieList> {
    return this.movieListSrc.asObservable();
  }

  private setTopMovies(movies: MovieList): void {
    movies.results = movies.results?.splice(0, 8);
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
