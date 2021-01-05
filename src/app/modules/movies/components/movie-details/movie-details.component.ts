import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieDetails} from '../../models/movies.model';
import {Subscription} from 'rxjs';
import {MovieDetailsService} from '../../services/movie-details/movie-details.service';
import {ApiConfigService} from '../../../shared/services/api-config/api-config.service';
import {TrailerService} from '../../services/trailer/trailer.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ImdbDetails} from '../../models/imdb-details.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  paramSubscription: Subscription | undefined;
  movieDetailsSubscription: Subscription | undefined;
  imdbDetailsSubscription: Subscription | undefined;


  movieDetails: MovieDetails | undefined;
  imdMovieDetails: ImdbDetails | undefined;
  trailerSrc: SafeResourceUrl | undefined;

  constructor(private route: ActivatedRoute,
              private movieDetailsService: MovieDetailsService,
              private trailerService: TrailerService,
              private domSanitizer: DomSanitizer,
              public apiConfigService: ApiConfigService) {
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      this.getMovieDetails(params.movieId);
      this.getTrailerUrl();
    });
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.movieDetailsSubscription?.unsubscribe();
    this.imdbDetailsSubscription?.unsubscribe();
  }

  private getMovieDetails(movieId: number): void {
    this.movieDetailsSubscription = this.movieDetailsService.getMovieDetails(movieId)
      .subscribe(movie => {
        this.movieDetails = movie;
        this.imdbDetailsSubscription = this.movieDetailsService.getImdbDetails(this.movieDetails.imdb_id)
          .subscribe(details => {
            this.imdMovieDetails = details;
          });
      });
  }

  private getTrailerUrl(): void {
    // Currently down because of rate limiting :/
    // const title = movie.title.replace(/\s+/g, '');
    // this.trailerService.getVideoId(title).subscribe(trailer => {
    // @ts-ignore
    // const fullSource = `https://www.youtube.com/embed/${trailer.items[0].id.videoId}`;
    // this.trailerSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(fullSource);
    // });
  }
}
