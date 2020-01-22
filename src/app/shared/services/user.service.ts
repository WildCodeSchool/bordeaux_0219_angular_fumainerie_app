import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // User mis en dur pour le moment en attente de signin
 user1: User = {id: 2, firstname: 'Julie', function: 'producteur', status: 1};
 user2: User = {id: 1, firstname: 'Erique', function: 'vidangeur', status: 1};
 user3: User = {id: 3, firstname: 'Olivier', function: 'admin', status: 1};
 user4: User = {id: 6, firstname: 'Marc', function: 'producteur', status: 1};
 user5: User = {id: 7, firstname: 'Jeanine', function: 'producteur', status: 1};

  constructor(private http: HttpClient) {}

}
