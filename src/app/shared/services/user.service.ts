import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // User mis en dur pour le moment en attente de signin
 user1 = {id: 2, firstname: 'Julie', username: 'producteur', status: 1};
 user2 = {id: 1, firstname: 'Erique', username: 'vidangeur', status: 1};
 user3 = {id: 3, firstname: 'Olivier', username: 'admin', status: 1};

  constructor(private http: HttpClient) {}


}
