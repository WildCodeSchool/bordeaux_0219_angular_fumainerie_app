import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { EventService } from '../../../shared/services/event.service';



@Component({
  selector: 'app-event-delete-modal',
  templateUrl: './event-delete-modal.component.html',
  styleUrls: ['./event-delete-modal.component.scss']
})
export class EventDeleteModalComponent implements OnInit {
  constructor( private dialogRef: MatDialogRef<EventDeleteModalComponent>,
               private eventService: EventService) { }

ngOnInit() {
}
onClose() {
this.dialogRef.close();
}
onDelete() {
this.eventService.deleteEvent().subscribe();
this.dialogRef.close();
}
}
