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
  mobile = true;
  visible = true;
  index: number;

/*   visibled(): Observable<boolean> {
    if (this.visible) {
      return Observable.of(true);
    } else {
      return Observable.of(false);
    }
  } */


  getAllWitness(): Observable<Witness[]> {
    return this.http.get<Witness[]>(WitnessService.URL + '/validations');
  }
  getValidedWitness(): Observable<Witness[]> {
    return this.http.get<Witness[]>(WitnessService.URL);
  }
  createWitness(witness: Witness): Observable<any> {
    witness.status = false;
    witness.user_id = 1;
    return this.http.post(WitnessService.URL, witness);
  }
  modifyWitness(witness: Witness): Observable<any> {
    return this.http.put(WitnessService.URL + `/${witness.id}`, witness);
  }
  deleteWitness(): Observable<any> {
    console.log('delete id: ' + this.index);
    return this.http.delete<Witness>(WitnessService.URL + `/${this.index}`);
  }
}
