import { environment } from './../../../environments/environment';
import { Newsletter } from './../models/newsletter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  static URL = environment.url + '/newsletter';
  constructor(private http: HttpClient) { }

  addEmail(newsletter: Newsletter): Observable<any> {
    return this.http.post(NewsletterService.URL, newsletter);
  }

}
