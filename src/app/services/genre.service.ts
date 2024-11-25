import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  constructor(private http: HttpClient) {}

  getGenres(): Observable<any> {
    return this.http.get(
      `${environment.apiBaseUrl}/genre/movie/list?api_key=${environment.apiKey}`
    );
  }
}