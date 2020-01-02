import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  static URL_GET_USER = 'https://localhost:3000/auth';
  user: User;


  getUserById(id: number) {
     return this.http.get(UserService.URL_GET_USER + '/' + id)
     .subscribe((user: User) => {
       this.user = user;
     });

  }
}
