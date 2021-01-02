import {Component, OnInit} from '@angular/core';
import {GenreService} from '../../../movies/services/genre/genre.service';
import {MovieListService} from '../../../movies/services/movie-list/movie-list.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private genreService: GenreService,
              private movieListService: MovieListService) {
  }

  ngOnInit(): void {
    // Initialize the Genres and movies in the landing page for a faster user experience
    if (!this.genreService.hasGenres()) {
      this.genreService.initializeGenres();
    }
    if (!this.movieListService.hasTopMovies()) {
      this.movieListService.initializeTopMovies();
    }
  }

}
