import { NewsService } from './../../../shared/services/news.service';
import { News } from './../../../shared/models/news';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews().subscribe((news) => {
      this.news = news;
    });
  }

}
