import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Project} from "../../interfaces/interfaces";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class  ProjectComponent {

  protected html?: SafeHtml;
  protected innerHtml: string = ` <div style="font-family: Arial, sans-serif; color: #00dddd; line-height: 1.6;">
    <h2 class="red"> Project Overview</h2>
    <p>
      The objective of this project is to modernize the company's online presence by redesigning the website with a focus on user-friendly navigation, responsive design, and enhanced visual appeal. We aim to improve the conversion rates and provide a seamless user experience across all devices.
    </p>
    <h3 style="color: #e76f51;">Key Deliverables:</h3>
    <ul style="padding-left: 20px;">
      <li>Redesigned homepage with a modern look and feel</li>
      <li>Improved site navigation and structure</li>
      <li>Optimized performance for faster load times</li>
      <li>Responsive design across all devices</li>
    </ul>
    <h3 style="color: #f4a261;">Timeline:</h3>
    <p>
      The project is expected to take approximately 8 weeks, with the following key milestones:
    </p>
    <ol style="padding-left: 20px;">
      <li>Week 1-2: Research and wireframing</li>
      <li>Week 3-4: Design and prototyping</li>
      <li>Week 5-6: Development and testing</li>
      <li>Week 7: User acceptance testing (UAT)</li>
      <li>Week 8: Launch and post-launch support</li>
    </ol>    <ol style="padding-left: 20px;">
      <li>Week 1-2: Research and wireframing</li>
      <li>Week 3-4: Design and prototyping</li>
      <li>Week 5-6: Development and testing</li>
      <li>Week 7: User acceptance testing (UAT)</li>
      <li>Week 8: Launch and post-launch support</li>
    </ol>    <ol style="padding-left: 20px;">
      <li>Week 1-2: Research and wireframing</li>
      <li>Week 3-4: Design and prototyping</li>
      <li>Week 5-6: Development and testing</li>
      <li>Week 7: User acceptance testing (UAT)</li>
      <li>Week 8: Launch and post-launch support</li>
    </ol>    <ol style="padding-left: 20px;">
      <li>Week 1-2: Research and wireframing</li>
      <li>Week 3-4: Design and prototyping</li>
      <li>Week 5-6: Development and testing</li>
      <li>Week 7: User acceptance testing (UAT)</li>
      <li>Week 8: Launch and post-launch support</li>
    </ol>    <ol style="padding-left: 20px;">
      <li>Week 1-2: Research and wireframing</li>
      <li>Week 3-4: Design and prototyping</li>
      <li>Week 5-6: Development and testing</li>
      <li>Week 7: User acceptance testing (UAT)</li>
      <li>Week 8: Launch and post-launch support</li>
    </ol>




  </div>

  <style>
  .red{color:red}
</style>

`;


  constructor(@Inject(MAT_DIALOG_DATA) public data: Project, protected _sanitizer: DomSanitizer, private snackBar: MatSnackBar) {
    this.html = this._sanitizer.bypassSecurityTrustHtml(data.htmlContent);

  }


  copyLink(id: number) {
    const link = window.location.href;
    const parts = link.split('/');
    const lastElement = parts[parts.length - 1];
    if(lastElement=='portfolio'){
      this.shareArticle( link+'/'+id.toString());
    }else {
      alert("Error sharing data")
    }
  }




  shareArticle(link: string) {
    navigator.clipboard.writeText(link).then(
      () => this.snackBar.open(`Link copied to clipboard!`, 'Close',
        {
          duration: 4000, verticalPosition: 'top', panelClass: 'article-read'
        }))
      .catch(err => alert(err));
  }

}
