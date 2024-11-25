import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreList'
})
export class GenreListPipe implements PipeTransform {
  transform(genreIds: number[], genres: any[]): string {
    if (!genreIds || !genres) return '';
    return genreIds
      .map(id => genres.find(g => g.id === id)?.name)
      .filter(name => name)
      .join(', ');
  }
}