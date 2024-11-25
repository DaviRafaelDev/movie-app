import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { RuntimePipe } from './pipes/runtime.pipe';
import { GenreListPipe } from './pipes/genre-list.pipe';
import { HoverScaleDirective } from './directives/hover-scale.directive';
import { LazyLoadImageDirective } from './directives/lazy-load-image.directive';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    RuntimePipe,
    GenreListPipe,
    HoverScaleDirective,
    LazyLoadImageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }