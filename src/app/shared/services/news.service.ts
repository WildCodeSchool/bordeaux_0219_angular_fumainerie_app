
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

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(NewsService.URL);
  }

  createNews(news: News): Observable<any> {
    console.log(news);
    return this.http.post(NewsService.URL, news);
  }
  deleteNews(id: number ): Observable<any> {
    console.log('delete id: ' + id);
    return this.http.delete<News>(NewsService.URL + `/${id}`);
  }
  modifyNews(news: News): Observable<any> {
    return this.http.put(NewsService.URL + `/${news.id}`, news);
  }
}

