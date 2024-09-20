import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective {

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {

    // Define the observer options
    const options = {
      root: null, // Uses the viewport as the root
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Create the Intersection Observer
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.el.nativeElement, 'in-view'); // Add class when in view
        this.observer.unobserve(this.el.nativeElement); // Stop observing once in view
      }
    }, options);

    // Start observing the element
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect(); // Clean up the observer when the directive is destroyed
  }
}
