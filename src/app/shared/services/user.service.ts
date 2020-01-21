import { User } from 'src/app/shared/models/user';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Home } from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class UserService {
<<<<<<< HEAD
  // User mis en dur pour le moment en attente de signin
 user1: User = {id: 2, firstname: 'Julie', fonction: 'producteur', status: 1};
 user2: User = {id: 1, firstname: 'Erique', fonction: 'vidangeur', status: 1};
 user3: User = {id: 3, firstname: 'Olivier', fonction: 'admin', status: 1};
 user4: User = {id: 6, firstname: 'Marc', fonction: 'producteur', status: 1};
 user5: User = {id: 7, firstname: 'Jeanine', fonction: 'producteur', status: 1};
=======
>>>>>>> develop

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
