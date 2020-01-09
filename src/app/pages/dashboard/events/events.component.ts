import { Router } from '@angular/router';
import { User } from './../../../shared/models/user';
import { UserService } from './../../../shared/services/user.service';
import { Event } from '../../../shared/models/events';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../shared/services/event.service';
import { BoundEventAst } from '@angular/compiler';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  user: User;
  events: Event[];
  onEventForm =  false;
  button =  true;

  constructor(private eventService: EventService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((event) => {
      this.events = event; }) ;
    this.user = this.userService.user;
  }
  onEventsForm() {
    this.onEventForm = !this.onEventForm;
    this.button = !this.button;
  }
}
