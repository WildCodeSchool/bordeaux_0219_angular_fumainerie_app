import { Injectable } from '@angular/core';
import { Event } from './../models/events';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class  EventService {
  static URL = 'http://localhost:3000/event';
  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(EventService.URL);
  }

  createEvents(event: Event): Observable<any> {
    console.log(event);
    return this.http.post(EventService.URL, event);
  }
}
