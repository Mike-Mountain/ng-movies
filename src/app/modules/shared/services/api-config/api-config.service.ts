import {Injectable} from '@angular/core';
import {BaseHttpService} from '../base-http/base-http.service';
import {HttpClient} from '@angular/common/http';
import {ApiConfig} from '../../models/api-config.model';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService extends BaseHttpService<ApiConfig> {

  public apiConfig: ApiConfig | undefined;

  constructor(private http: HttpClient) {
    super(http);
  }

  public initializeApiConfig(): void {
    const url = super.setUrl('configuration');
    super._get(url).subscribe(config => {
      this.apiConfig = config;
    });
  }
}
