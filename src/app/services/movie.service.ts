import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopularMovies(page: number = 1): Observable<any> {
    return this.http.get(
      `${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`
    );
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(
      `${environment.apiBaseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }

  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get(
      `${environment.apiBaseUrl}/search/movie?api_key=${environment.apiKey}&query=${query}&page=${page}`
    );
  }
}