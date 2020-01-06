import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Draining } from '../models/draining';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DrainingService {
  static URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  postDrainingRequest(drainingRequest: Draining): Observable<Draining> {
    return this.http.post<Draining>(DrainingService.URL + 'drainingRequest', drainingRequest);
  }
  getUserId(): Observable<User> {
    return this.http.get<User>(DrainingService.URL + 'user/2');
  }
  getSlot(): Observable<any> {
    return this.http.get(DrainingService.URL + 'slot');
  }
  getAllDrainingRequestByUser(id: number): Observable<Draining[]> {
    console.log('coucou' + id);
    return this.http.get<Draining[]>(DrainingService.URL + `drainingRequest/user/${id}`);
  }
}
