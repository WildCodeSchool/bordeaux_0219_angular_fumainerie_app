import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrainingRequest } from '../models/drainingRequest';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DrainingRequestService {

  constructor(private http: HttpClient, private userService: UserService) { }
  static URL = 'http://localhost:3000/';

  postDrainingRequest(drainingRequest: DrainingRequest): Observable<DrainingRequest> {
    return this.http.post<DrainingRequest>(DrainingRequestService.URL + 'drainingRequest/draining', drainingRequest);
  }
  getSlot(): Observable<any> {
    return this.http.get(DrainingRequestService.URL + 'slot');
  }
  getAllDrainingRequestByUser(id: number): Observable<DrainingRequest[]> {
    return this.http.get<DrainingRequest[]>(DrainingRequestService.URL + `drainingRequest/user/${id}`);
  }

  // postEmergencyDrainingRequest(drainingRequestEmergency: DrainingRequest ) {
  //   return this.http.post<DrainingRequest>(DrainingRequestService.URL + 'drainingRequest', drainingRequestEmergency );
  // }
}
