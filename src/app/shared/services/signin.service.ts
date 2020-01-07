import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  static URL = 'http://localhost:3000/auth/signin';

  constructor(private http: HttpClient) { }

  connectUser(user: User): Observable<User> {
    return this.http.post<User>(SigninService.URL, user);

  }

}
