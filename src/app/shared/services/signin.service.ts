import { User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  static URL = 'http://localhost:3000/auth/signin';
  constructor(private http: HttpClient) { }

  authUser(user): Observable<User> {
    return this.http.post<any>(SigninService.URL, user);
  }
}
