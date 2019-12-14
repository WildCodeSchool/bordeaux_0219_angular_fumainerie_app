import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WitnessService {
  static URL = 'http://localhost:3000/witness';
  constructor(private http: HttpClient) { }

getAllDocuments(): Observable<Document[]> {
  return this.http.get<Witness[]>(WitnessService.URL);
}

}
