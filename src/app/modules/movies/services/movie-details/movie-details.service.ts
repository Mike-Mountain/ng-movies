import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieDetails} from '../../models/movies.model';
import {BaseHttpService} from '../../../shared/services/base-http/base-http.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService extends BaseHttpService<MovieDetails> {

  constructor(private http: HttpClient) {
    super(http);
  }

  public getMovieDetails(id: number): Observable<MovieDetails> {
    const url = super.setUrl(`movie/${id}`);
    return super._get(url);
  }
}
