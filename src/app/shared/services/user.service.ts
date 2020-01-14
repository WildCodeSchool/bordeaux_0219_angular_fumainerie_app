import { User } from 'src/app/shared/models/user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  user: User ;
  token: string;


  postUpdateUserForm(user: User, id: number) {
    return this.http.put(UserService.URL + `/user/${id}`, user);
  }

  postHomeForm(home: Home) {
    return this.http.post(UserService.URL + '/home', home);

  }
  public connexion(user: User) {
    return this.http.post(UserService.URL_AUTH + '/signin', user, {observe: 'response'}).pipe(
      tap((response: HttpResponse<User>) => {
        const token = response.headers.get('JWT-TOKEN');
        localStorage.setItem('TOKEN', token);
        this.user = response.body;
        return response.body;
      }));
    }
  }
