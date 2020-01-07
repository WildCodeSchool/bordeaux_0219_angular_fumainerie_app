
import { News } from '../models/news';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  static URL = 'http://localhost:3000/news';
  constructor(private http: HttpClient) { }
  mobile = true;
  visible = true;

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(NewsService.URL + '/validations');
  }
  getValidedNews(): Observable<News[]> {
    return this.http.get<News[]>(NewsService.URL);
  }
  createNews(news: News): Observable<any> {
    news.status = false;
    news.user_id = 1;
    console.log(news);
    return this.http.post(NewsService.URL, news);
  }
  hideNewsListOnMobile() {
    console.log('visibleAvantFct =' + this.visible);
    if (this.mobile) {
      this.visible = !this.visible;
    }
    console.log('visibleApresFct =' + this.visible);
  }

}
