import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article.model';
import { ArticleService } from 'src/app/services/article.service';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-scientists-articles',
  templateUrl: './scientists-articles.component.html',
  styleUrls: ['./scientists-articles.component.css']
})
export class ScientistsArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    public connexionService: ConnexionService
  ) { }

  ngOnInit(): void {
    this.GetScientistsArticles();

  }


  
  GetScientistsArticles(): void {
    this.articleService.GetScientistsArticles().subscribe(
      (data: Article[]) => {
        this.articles = data.map(article => {
          if (article.image) {
            article.image = 'https://127.0.0.1:8000/ArticleImages/' + article.image;
          }
          return article;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
