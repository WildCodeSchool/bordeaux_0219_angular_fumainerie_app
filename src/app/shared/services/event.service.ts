import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Event } from './../models/events';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class  EventService {
  static URL = 'http://localhost:3000/event';

  button = true;
  onEventForm = false;

  constructor(private http: HttpClient,
              private userService: UserService) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(EventService.URL + '/date');
  }

  createEvents(event: Event): Observable<any> {
    console.log(event);
    event.user_id = this.userService.user.id;
    return this.http.post(EventService.URL, event);
  }
}
