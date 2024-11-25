import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(this.getStoredTheme());
  isDarkTheme$ = this.isDarkTheme.asObservable();

  constructor() {
    // Aplicar tema inicial
    this.setTheme(this.isDarkTheme.value);
  }

  private getStoredTheme(): boolean {
    const stored = localStorage.getItem('darkTheme');
    return stored ? JSON.parse(stored) : false;
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkTheme.value;
    this.isDarkTheme.next(newTheme);
    localStorage.setItem('darkTheme', JSON.stringify(newTheme));
    this.setTheme(newTheme);
  }

  private setTheme(isDark: boolean): void {
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}