import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled7';

  route = inject(Router)

  constructor(private snackBar: MatSnackBar) {
  }


  activeRoute(path: string) {
    return this.route.url == path;
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(
      () => this.snackBar.open(text + ` copied to clipboard!`, 'Close', {duration: 3000,}))
      .catch(err => alert(err));
  }
}
