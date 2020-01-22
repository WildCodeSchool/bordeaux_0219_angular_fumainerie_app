import { User } from 'src/app/shared/models/user';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Home } from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  static URL = 'http://localhost:3000';
  static URL_AUTH = 'http://localhost:3000/auth';

  user: User ;
  token: string;

  public getMe() {
    return this.http.get(UserService.URL + '/user/me').pipe(
      tap((user: User) => {
        this.user = user;
      })
    );
  }

  public isLogged( ) {
    return this.getMe().pipe(
      map((user: User) => {
        return (user != null);
      }
    ));
  }

  postUpdateUserForm(user: User, id: number) {
    return this.http.put(UserService.URL + `/user/${id}`, user);
  }

  postHomeForm(home: Home, user: User) {
    return this.http.post(UserService.URL + '/home/update', [home, user]);
  }

  public connexion(user: User) {
    return this.http.post(UserService.URL_AUTH + '/signin', user, {observe: 'response'}).pipe(
      tap((response: HttpResponse<any>) => {
        const token = response.headers.get('JWT-TOKEN');
        localStorage.setItem('JWT-TOKEN', token);
        this.user = response.body;
        return response.body;
      }));
    }
  }
