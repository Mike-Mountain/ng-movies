import {Component, OnInit} from '@angular/core';
import {ApiConfigService} from './modules/shared/services/api-config/api-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private apiConfigService: ApiConfigService) {
  }

  ngOnInit(): void {
    this.apiConfigService.initializeApiConfig();
  }

}
