import { Component, HostListener } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResults: Movie[] = [];
  searchQuery: string = '';
  currentPage = 1;
  isLoading = false;
  hasMorePages = true;

  constructor(private movieService: MovieService) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
      this.loadMoreResults();
    }
  }

  search() {
    if (this.searchQuery.trim()) {
      // Reset quando uma nova busca é iniciada
      this.searchResults = [];
      this.currentPage = 1;
      this.hasMorePages = true;
      this.loadResults();
    }
  }

  loadResults() {
    if (this.isLoading || !this.hasMorePages) return;
  
    this.isLoading = true;
    this.movieService.searchMovies(this.searchQuery, this.currentPage).subscribe(
      (data: any) => {
        const newResults = data.results.filter(
          (movie: Movie) => !this.searchResults.some((existingMovie) => existingMovie.id === movie.id)
        );
        this.searchResults = [...this.searchResults, ...newResults];
        this.hasMorePages = this.currentPage < data.total_pages;
        this.currentPage++;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    );
  }

  loadMoreResults() {
    if (this.searchQuery.trim()) {
      this.loadResults();
    }
  }
}