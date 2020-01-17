import { MatDialogRef } from '@angular/material';
import { Component} from '@angular/core';

@Component({
  selector: 'app-event-modal-form',
  templateUrl: './event-modal-form.component.html',
  styleUrls: ['./event-modal-form.component.scss']
})

export class EventModalFormComponent {

  constructor(private dialogRef: MatDialogRef<EventModalFormComponent>) {}

  onClose() {
    this.dialogRef.close(true);
  }
}
