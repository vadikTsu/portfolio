import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProjectComponent} from "../project/project.component";
import {Project, ProjectType} from "../../interfaces/interfaces";
import {MOCK_PROJECTS} from "../../data";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  protected projectsList: Project[]=[];
  protected demoProjectList: Project[]=[];
  protected completeProjectList: Project[]=[];
  protected algorithmProjectList: Project[]=[];

  constructor(private route: ActivatedRoute, public dialog: MatDialog,private router: Router) {}

  ngOnInit() {
    this.projectsList = MOCK_PROJECTS;
    this.completeProjectList = this.projectsList.filter((project)=> project.type==ProjectType.COMPLETE);
    this.demoProjectList = this.projectsList.filter((project)=> project.type==ProjectType.DEMO);
    this.algorithmProjectList = this.projectsList.filter((project) => project.type == ProjectType.ALGORITHMS);

    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        const proj = this.projectsList.find(project => project.id == id);
        if (proj) {
          this.openProject(proj);
          this.router.navigate(['../'], { relativeTo: this.route });
        }
      }
    })


  }

  openProject(project: Project) {
    this.dialog.open(ProjectComponent, {
      height: '100vh',
      maxWidth: '100vw',
      data: project
    })
  }
}
