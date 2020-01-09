
import { News } from '../models/news';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  static URL = 'http://localhost:3000/news';
  index: number;


  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(NewsService.URL);
  }
  getValidedNews(): Observable<News[]> {
    return this.http.get<News[]>(NewsService.URL + `/valided`);
  }
  createNews(news: News): Observable<any> {
    news.status = true;
    news.user_id = 1;
    return this.http.post(NewsService.URL, news);
  }
  modifyNews(news: News): Observable<any> {
    return this.http.put(NewsService.URL + `/${news.id}`, news);
  }
  deleteNews(): Observable<any> {
    console.log('delete id: ' + this.index);
    return this.http.delete<News>(NewsService.URL + `/${this.index}`);
  }
}
