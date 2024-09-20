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
export class ProjectComponent {

  protected html?: SafeHtml;
  protected innerHtml: string = `

<div class="project-presentation">
  <header class="project-header">
    <h1 class="project-title">Auction Ocean</h1>
    <h5 class="project-subtitle">The Ultimate Real-Time Auction Platform</h5>
  </header>

  <hr class="divider">

  <section class="project-description">
    <p>
      <strong>Auction Ocean</strong> is a cutting-edge web application designed to transform the online auction experience. Leveraging the power of <span class="tech-highlight">Java Spring Boot</span> for robust back-end services, <span class="tech-highlight">Angular</span> for a dynamic and responsive front-end, and <span class="tech-highlight">WebSocket</span> for real-time updates, Auction Ocean ensures a seamless and interactive bidding process. Integrated with <span class="tech-highlight">Stripe</span> for secure and efficient transactions, our platform provides an intuitive user experience and reliable performance.
    </p>
  </section>

  <section class="technology-stack">
    <h2>Technology Stack</h2>
    <div class="tech-icons">
      <div class="tech-item">
        <i class="fab fa-java"></i>
        <p>Spring Boot</p>
      </div>
      <div class="tech-item">
        <i class="fab fa-angular"></i>
        <p>Angular</p>
      </div>
      <div class="tech-item">
        <i class="fas fa-plug"></i>
        <p>WebSocket</p>
      </div>
      <div class="tech-item">
        <i class="fab fa-stripe"></i>
        <p>Stripe</p>
      </div>
      <div class="tech-item">
    <i class="fas fa-comments"></i>
    <p>ArtemisMQ</p>
  </div>
   <div class="tech-item">
    <i class="fas fa-database"></i>
    <p>Hibernate</p>
  </div>
    </div>
  </section>
  <div class="section">
    <h2>Impressions</h2>
    <hr style="width: 100%">
    <section>
    <p>suspendisse semper vulputate nihil unum ex recteque necessitatibus ancillae laudem decore malorum erat te malorum reprehendunt definiebas dicam ad possim dolore contentiones expetenda sumo accommodare vocent intellegebat civibus necessitatibus porro movet meliore mi luctus utamur electram primis habitasse doming suspendisse ignota maiorum feugait interesset saperet adhuc congue eros perpetua constituto felis duis pericula electram instructior singulis fastidii scripta quot necessitatibus fames ornatus an dicant sapien simul felis fuisset venenatis maecenas</p>
</section>
 </section>
  <div class="section">
    <h6>Links</h6>
    <hr style="width: 50%">
    <section>
</section>
</dic>




<div class="links-container">
  <a href="https://github.com" class="link-item" target="_blank">
    <i class="fab fa-github"></i> GitHub
  </a>
  <a href="https://drive.google.com" class="link-item" target="_blank">
    <i class="fab fa-google-drive"></i> Google Drive
  </a>
</div>

</div>
</div>
</div>



<style>

.section{
    margin-top: 60px;
    display: flex;
    flex-direction: column;
}
/* Base styles */
/* Container for the links */
.links-container {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Space between links */
  max-width: 300px; /* Limit the width if needed */
  margin: 0 auto; /* Center the container */
}

/* Style for each link item */
.link-item {
  display: flex;
  align-items: center;
  text-decoration: none; /* Remove underline from links */
  color: #333; /* Default text color */
  background: rgba(249,249,249,0.36); /* Background color */
  border: 1px solid #ddd; /* Border around the link */
  border-radius: 5px; /* Rounded corners */
  padding: 0.75rem 1rem; /* Padding inside the link */
  transition: background 0.3s, color 0.3s; /* Smooth transition for hover effects */
}

/* Icon styling */
.link-item i {
  margin-right: 0.5rem; /* Space between icon and text */
  font-size: 1.2rem; /* Size of the icon */
  color: #002aff; /* Icon color */
}

/* Hover effect */
.link-item:hover {
  background: rgba(0,255,89,0.64); /* Background color on hover */
  color: #fff; /* Text color on hover */
  border-color: #ffff00; /* Border color on hover */
}

/* Focus effect for accessibility */
/*.link-item:focus {*/
/*  outline: 2px solid #007BFF; !* Outline for focus *!*/
/*  outline-offset: 2px; !* Offset for better visibility *!*/
/*}*/
.technology-stack{
box-shadow: 0px 3px 3px 2px #1c1b1a;
padding: 2rem;
display: flex;
flex-direction: column;
border-radius: 1rem;
}


.project-presentation {

  /*max-width: 900px;*/
  /*background: rgba(81,175,185,0.8);*/
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  overflow: hidden;
}

/* Header styles */
.project-header {
  margin-bottom: 1.5rem;
}

.project-title {
  font-size: 2.5rem;
  color: rgb(40,172,225);
  margin: 0;
}

.project-subtitle {
  font-size: 1.3rem;
  color: rgba(58,222,181,0.56);
  margin: 0.5rem 0 1.5rem 0;
}

.divider {
  margin: 1.5rem 0;
  border: none;
  height: 2px;
  background-color: rgba(229,47,47,0.73);
}

/* Description styles */
.project-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(255,255,0,0.67);
}

.tech-highlight {
  color: #1dff74;
  font-weight: bold;
}

/* Technology stack styles */
.technology-stack h2 {
  font-size: 1.8rem;
  color: #70c322;
  margin-bottom: 1rem;
}

.tech-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tech-item i {
  font-size: 2rem;
  color: #1dff74;
  margin-bottom: 0.5rem;
}

.tech-item p {
  margin: 0;
  font-size: 1rem;
  color: #cce8e7;
}

</style>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

`;


  constructor(@Inject(MAT_DIALOG_DATA) public data: Project, protected _sanitizer: DomSanitizer, private snackBar: MatSnackBar) {
    this.html = this._sanitizer.bypassSecurityTrustHtml(data.htmlContent);
    // this.html = this._sanitizer.bypassSecurityTrustHtml(this.innerHtml);

  }


  copyLink(id: number) {
    const link = window.location.href;
    const parts = link.split('/');
    const lastElement = parts[parts.length - 1];
    if (lastElement == 'portfolio') {
      this.shareArticle(link + '/' + id.toString());
    } else {
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
