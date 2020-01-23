import { environment } from './../../../environments/environment';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Event } from './../models/events';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class  EventService {
  static URL = environment.url + '/event';

  button = true;
  onEventForm = false;
  index: number;

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
  deleteEvent(): Observable<any> {
    console.log('delete id: ' + this.index);
    return this.http.delete<Event>(EventService.URL + `/${this.index}`);
  }
}
