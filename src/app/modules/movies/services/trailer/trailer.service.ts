import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {BaseHttpService} from '../../../shared/services/base-http/base-http.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrailerService extends BaseHttpService<unknown> {

  constructor(private http: HttpClient) {
    super(http);
  }

  getVideoId(videoTitle: string): Observable<unknown> {
    const titleUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${videoTitle}&key=${environment.ytKey}`;
    return super._get(titleUrl);
  }
}
