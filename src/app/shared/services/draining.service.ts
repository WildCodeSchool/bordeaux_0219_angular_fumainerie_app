import { Draining } from '../models/draining';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrainingService {
  static URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getDrainingByUserId(id: number): Observable<Draining []> {
    return this.http.get<Draining []>(DrainingService.URL + 'draining/user/' + id);
  }
}
