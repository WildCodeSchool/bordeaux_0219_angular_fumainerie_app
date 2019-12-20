import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Draining } from '../models/draining';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DrainingService {
  static URL = 'http://localhost:3000/drainings';
  static UrlUser = 'http://localhost:3000/users/2';

  constructor(private http: HttpClient) { }

  postDrainingRequest(drainingRequest: Draining): Observable<Draining> {
    return this.http.post<Draining>(DrainingService.URL, drainingRequest);
  }

  getUserId(): Observable<User> {
    return this.http.get<User>(DrainingService.UrlUser);
  }
}
