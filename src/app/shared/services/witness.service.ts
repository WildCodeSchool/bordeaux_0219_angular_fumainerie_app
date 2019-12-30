import { Witness } from './../models/witness';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WitnessService {
  static URL = 'http://localhost:3000/witness';
  constructor(private http: HttpClient) { }

  getAllWitness(): Observable<Witness[]> {
    return this.http.get<Witness[]>(WitnessService.URL);
  }

  public createWitness(witness: Witness): Observable<any> {
    witness.valided = false;
    witness.user_id = 0;
    console.log(witness);
    return this.http.post(WitnessService.URL, witness);
  }

}
