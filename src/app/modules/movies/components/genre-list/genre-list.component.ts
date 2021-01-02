import { Component, OnInit } from '@angular/core';
import {GenreService} from '../../services/genre/genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {

  constructor(public genreService: GenreService) { }

  ngOnInit(): void {
  }

}
