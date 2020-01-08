import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  static URL_GET_USER = 'https://localhost:3000/auth';
  // User mis en dur pour le moment en attente de signin

 user2: User = {id: 1, firstname: 'Erique', username: 'vidangeur', status: true};
 user3: User = {id: 3, firstname: 'Olivier', username: 'admin', status: true};
  user: User;
  user1: User = {
    id : 1,
    username : 'baron',
    status : true,
    function : 'admin'};


getUserById(id: number) {
     return this.http.get(UserService.URL_GET_USER + '/' + id)
     .subscribe((user: User) => {
       this.user = user;
     });

  }
}
