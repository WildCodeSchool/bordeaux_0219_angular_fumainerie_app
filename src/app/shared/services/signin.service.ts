import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  static URL = 'http://localhost:3000/auth/signin';
  constructor(private http: HttpClient) { }

  // authentification envoi email / mdp
  // authUser(email: string, password: string): Observable<any> {
  //   return this.http.post<any>(SigninService.URL, [email, password]);
  // }



  connectUser(user: User): Observable<User> {   // a virer  déplacé dans le user xservice
    return this.http.post<User>(SigninService.URL, user);

  }

}
