import { Newsletter } from './../models/newsletter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  static URL = 'http://localhost:3000/newsletter';
  constructor(private http: HttpClient) { }

  addEmail(newsletter: Newsletter): Observable<any> {
    return this.http.post(NewsletterService.URL, newsletter);
  }

}
