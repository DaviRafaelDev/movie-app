import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  genres: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private genreService: GenreService
  ) {}

  ngOnInit() {
    const movieId = this.route.snapshot.params['id'];
    this.movieService.getMovieDetails(movieId).subscribe(
      (data: any) => {
        this.movie = data;
      }
    );

    this.genreService.getGenres().subscribe(
      (data: any) => {
        this.genres = data.genres;
      }
    );
  }
}