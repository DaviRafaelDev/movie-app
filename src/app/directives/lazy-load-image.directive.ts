import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appLazyLoadImage]'
})
export class LazyLoadImageDirective {
  @Input('appLazyLoadImage')
  set imageUrl(url: string) {
    if (url) {
      this.el.nativeElement.src = url;
      this.el.nativeElement.loading = 'lazy';
    }
  }

  constructor(private el: ElementRef) {}
}