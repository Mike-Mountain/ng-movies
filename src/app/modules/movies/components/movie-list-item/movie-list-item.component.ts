import {Component, Input, OnInit} from '@angular/core';
import {MovieOverview} from '../../models/movie-overview.model';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {

  @Input() movie: MovieOverview | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
