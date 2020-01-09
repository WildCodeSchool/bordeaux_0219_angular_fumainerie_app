import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  static URL_GET_USER = 'https://localhost:3000/auth';
  static URL_GET_TOKEN = '';

  // User mis en dur pour le moment en attente de signin

  user2: User = {id: 1, firstname: 'Erique', function: 'vidangeur', status: true};
  user3: User = {id: 3, firstname: 'Olivier', function: 'admin', status: true};
  user1: User = {id: 1, firstname: 'Olivier', status : true, function : 'admin'};

  user: User = this.user1;


getUserById(id: number) {
     return this.http.get(UserService.URL_GET_USER + '/' + id)
     .subscribe((user: User) => {
       this.user = user;
     });

  }

  getToken(): string {
    return localStorage.getItem('token');
  }


}
