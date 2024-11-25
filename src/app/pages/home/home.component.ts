import { Component, OnInit, HostListener } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  currentPage = 1;
  isLoading = false;
  hasMorePages = true;
  
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
      this.loadMoreMovies();
    }
  }

  loadMovies() {
    if (this.isLoading || !this.hasMorePages) return;
    
    this.isLoading = true;
    this.movieService.getPopularMovies(this.currentPage).subscribe(
      (data: any) => {
        this.popularMovies = [...this.popularMovies, ...data.results];
        this.hasMorePages = this.currentPage < data.total_pages;
        this.currentPage++;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    );
  }

  loadMoreMovies() {
    this.loadMovies();
  }
}