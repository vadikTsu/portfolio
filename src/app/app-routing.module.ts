import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {BlogComponent} from "./components/blog/blog.component";
import {ProjectComponent} from "./components/project/project.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'portfolio' , component: PortfolioComponent},
  {path: 'portfolio/:id' , component: PortfolioComponent},
  {path: 'blog' , component: BlogComponent},
  {path: 'blog/:id' , component: BlogComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
