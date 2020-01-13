import { User } from 'src/app/shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Home } from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  static URL = 'http://localhost:3000';
  static URL_AUTH = 'http://localhost:3000/auth';

  // User mis en dur pour le moment en attente de signin

  user2: User = {id: 1, firstname: 'Erique', function: 'vidangeur', status: true};
  user3: User = {id: 3, firstname: 'Olivier', function: 'admin', status: true};
  user1: User = {id: 1, firstname: 'Olivier', function : 'admin', status : true};

  user: User = this.user1;
  token: string;


  getUserById(id: number) {
    return this.http.get(UserService.URL_AUTH + '/' + id)
    .subscribe((user: User) => {
      this.user = user;
    });

  }
  getToken(token) {
    this.token = token;
  }

  postUpdateUserForm(user: User, id: number) {
    return this.http.put(UserService.URL + `/user/${id}`, user);
  }

  postHomeForm(home: Home, id: number) {
    return this.http.post(UserService.URL + `/home/${id}`, home);

  }
  public connexion(user: User) {
    return this.http.post(UserService.URL_AUTH + '/signin', user).pipe(
      tap((token: any) => localStorage.set('TOKEN', token)
      ));
    }
  }
