import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  static URL = 'http://localhost:3000/auth/signup';

  constructor(private http: HttpClient) { }

  postNewUser(user: User): Observable<User> {
    return this.http.post<User>(SignupService.URL, user);

  }

}
