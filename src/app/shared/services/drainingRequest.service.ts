import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrainingRequest } from '../models/drainingRequest';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DrainingRequestService {
  static URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  postDrainingRequest(drainingRequest: DrainingRequest): Observable<DrainingRequest> {
    return this.http.post<DrainingRequest>(DrainingRequestService.URL + 'drainingRequest', drainingRequest);
  }
  getUserId(): Observable<User> {
    return this.http.get<User>(DrainingRequestService.URL + 'user/1');
  }
  getSlot(): Observable<any> {
    return this.http.get(DrainingRequestService.URL + 'slot');
  }
  getAllDrainingRequestByUser(id: number): Observable<DrainingRequest[]> {
    console.log('coucou' + id);
    return this.http.get<DrainingRequest[]>(DrainingRequestService.URL + `drainingRequest/user/${id}`);
  }
}
