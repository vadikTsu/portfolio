import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  htmlVar: SafeHtml;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; content: string },
              private dialogRef: MatDialogRef<ArticleComponent>, protected _sanitizer: DomSanitizer) {
    this.htmlVar = this._sanitizer.bypassSecurityTrustHtml(data.content);
  }


  onClose(): void {
    this.dialogRef.close();
  }
}
