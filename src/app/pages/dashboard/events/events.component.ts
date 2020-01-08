import { Event } from '../../../shared/models/events';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../shared/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[];
  onEventForm = false;
  button = true;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((event) => {
      this.events = event; }) ;
  }
  onEventsForm() {
    this.onEventForm = !this.onEventForm;
    this.button = !this.button;
  }
}