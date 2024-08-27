import {Component, inject, OnInit} from '@angular/core';
import {Article, ArticleCategory} from "../../interfaces/interfaces";
import {MOCK_ARTICLES, MOCK_CATEGORIES} from "../../data";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ArticleComponent} from "../article/article.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{

  protected currentCategory: string = 'all';
  protected ARTICLES: Article[] = [];
  protected ARTICLE_CATEGORIES: ArticleCategory[] = [];

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router,private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.ARTICLES = MOCK_ARTICLES;
    this.ARTICLE_CATEGORIES = MOCK_CATEGORIES;

  }

  switchCategory(identifier: string) {
    if (this.currentCategory == identifier) {
      return;
    }

    if (identifier == 'all') {
      this.ARTICLES = MOCK_ARTICLES;
      this.currentCategory=identifier;
      return;
    }

    this.ARTICLES = MOCK_ARTICLES.filter(article => article.categoryIdentifier === identifier)
    this.currentCategory = identifier;

  }

  shareArticle(){
    navigator.clipboard.writeText("text").then(
      () => this.snackBar.open( ` copied to clipboard!`, 'Close',
        {duration: 4000, verticalPosition:'top', panelClass: 'article-read'
      }))
      .catch(err => alert(err));
  }

    displayArticleContent(htmlContent: string) {
      this.dialog.open(ArticleComponent, {
        data:{
          title: htmlContent,
          content: htmlContent,
        } ,
        maxWidth: '90vw',
        maxHeight: '90vh'
      });
    }
}
