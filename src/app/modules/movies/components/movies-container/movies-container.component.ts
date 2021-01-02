import {Component, OnInit} from '@angular/core';
import {GenreService} from '../../services/genre/genre.service';
import {MovieListService} from '../../services/movie-list/movie-list.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss']
})
export class MoviesContainerComponent implements OnInit {

  constructor(private genreService: GenreService,
              public movieListService: MovieListService) {
  }

  ngOnInit(): void {
    if (!this.genreService.hasGenres()) {
      this.genreService.initializeGenres();
    }
    if (!this.movieListService.hasTopMovies()) {
      this.movieListService.initializeTopMovies();
    }
  }

}
