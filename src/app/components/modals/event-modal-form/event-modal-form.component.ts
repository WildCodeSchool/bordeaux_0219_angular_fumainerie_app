import { MatDialogRef } from '@angular/material';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../../shared/services/event.service';

@Component({
  selector: 'app-event-modal-form',
  templateUrl: './event-modal-form.component.html',
  styleUrls: ['./event-modal-form.component.scss']
})
export class EventModalFormComponent {

  constructor(private router: Router,
              private eventService: EventService,
              private dialogRef: MatDialogRef<EventModalFormComponent>) {}
  onClose() {
    this.dialogRef.close(true);
  }
}

