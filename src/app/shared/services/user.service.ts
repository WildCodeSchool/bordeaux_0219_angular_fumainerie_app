import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  static URL_AUTH = 'http://localhost:3000/auth';
  static URL_GET_TOKEN = '';

  // User mis en dur pour le moment en attente de signin

  user2: User = {id: 1, firstname: 'Erique', function: 'vidangeur', status: true};
  user3: User = {id: 3, firstname: 'Olivier', function: 'admin', status: true};
  user1: User = {id: 1, firstname: 'Olivier', function : 'admin', status : true};

  user: User = this.user1;


getUserById(id: number) {
     return this.http.get(UserService.URL_AUTH + '/' + id)
     .subscribe((user: User) => {
       this.user = user;
     });

  }
  getUser() {
    return true;    // get user pour guard à définir
  }

  public connexion(user: User) {
    return this.http.post(UserService.URL_AUTH + '/signin', user).pipe(
      tap((token: any) => localStorage.set('TOKEN', token)
    ));
    }




}
