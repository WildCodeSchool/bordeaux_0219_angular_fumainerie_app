import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrainingRequest } from '../models/drainingRequest';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrainingRequestService {

  constructor(private http: HttpClient, private userService: UserService) { }
  static URL = 'http://localhost:3000';

  postDrainingRequest(drainingRequest: DrainingRequest[]): Observable<DrainingRequest[]> {
    return this.http.post<DrainingRequest[]>(DrainingRequestService.URL + '/drainingRequest/draining', drainingRequest);
  }

  getSlot(): Observable<any> {
    return this.http.get(DrainingRequestService.URL + '/slot');
  }
  getAllDrainingRequestForCurrentUser(id: number): Observable<DrainingRequest[]> {
    return this.http.get<DrainingRequest[]>(DrainingRequestService.URL + `/drainingRequest/user/${id}`)
    .pipe(map((drainingRequests) => drainingRequests.map(dR => new DrainingRequest(dR))));
  }

  // Vidangeur

  getAllDrainingRequestUnchecked(): Observable<DrainingRequest[]> {
    return this.http.get<DrainingRequest[]>(DrainingRequestService.URL + '/drainingRequest/unchecked');
  }

  updateDrainingRequest(accepted: DrainingRequest): Observable<DrainingRequest> {
    const id = accepted.draining_id;
    delete accepted.draining_id;

    console.log(accepted);
    return this.http.put<DrainingRequest>(DrainingRequestService.URL + `/drainingrequest/${id}/accepte`, accepted);
  }

}
