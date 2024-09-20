  import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
  import {animate, keyframes, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('anim', [
      transition('*<=>*', [
        query(':enter', [
            style({opacity: 0.5, transform: 'scale(0.9)'}),
            stagger(150, [
              animate('1s ease-in',style({opacity: 1, transform: 'scale(1)'})),
            ])
          ], {optional: false}
        )
      ])
    ]),

    trigger('openClose', [
      transition(':enter', [
        style({ height: '0px' }), // Initial height for entering elements
        animate('0.5s ease-in', style({ height: '*' })) // Animate to full height
      ]),
      transition(':leave', [
        style({ height: '*' }), // Start at full height
        animate('0.3s ease-in', style({ height: '0px' })) // Animate to zero height
      ])
    ])
  ]
})
export class AppComponent {
  title = 'untitled7';
  protected mobileMenuState : 'opened'|'closed' = 'closed';
  route = inject(Router)

  constructor(private snackBar: MatSnackBar) {
  }

  toggleMobileMenu() {
    this.mobileMenuState =
      this.mobileMenuState === 'closed' ? 'opened' : 'closed';
  }


  activeRoute(path: string) {
    return this.route.url == path;
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(
      () => this.snackBar.open(text + ` copied to clipboard!`, 'Close', {duration: 3000,}))
      .catch(err => alert(err));
  }

  protected readonly window = window;
}
