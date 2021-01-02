import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../../shared/services/base-http/base-http.service';
import {GenreList} from '../../models/genres.model';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService extends BaseHttpService<GenreList> {

  private genresSrc = new BehaviorSubject<GenreList>({genres: []});

  constructor(private http: HttpClient) {
    super(http);
  }

  public initializeGenres(): void {
    const url = super.setUrl('genre/movie/list');
    // TODO: Add to local DB
    super._get(url).subscribe(genres => {
      this.setGenres(genres);
    });
  }

  public getGenres(): Observable<GenreList> {
    return this.genresSrc.asObservable();
  }

  public hasGenres(): boolean {
    const genres = this.genresSrc.getValue().genres;
    return genres.length > 0;
  }

  private setGenres(genres: GenreList): void {
    this.genresSrc.next(genres);
  }
}
