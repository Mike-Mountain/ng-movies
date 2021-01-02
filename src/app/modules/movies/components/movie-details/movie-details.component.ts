import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieDetails} from '../../models/movies.model';
import {Subscription} from 'rxjs';
import {MovieDetailsService} from '../../services/movie-details/movie-details.service';
import {ApiConfigService} from '../../../shared/services/api-config/api-config.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  @ViewChild('container') container: TemplateRef<HTMLElement> | undefined;

  selectedMovie: MovieDetails | undefined;
  paramSubscription: Subscription | undefined;
  movieDetailsSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute,
              private movieDetailsService: MovieDetailsService,
              public apiConfigService: ApiConfigService) {
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      this.movieDetailsSubscription = this.movieDetailsService.getMovieDetails(params.movieId)
        .subscribe(movie => {
          this.selectedMovie = movie;
        });
    });
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.movieDetailsSubscription?.unsubscribe();
  }
}
