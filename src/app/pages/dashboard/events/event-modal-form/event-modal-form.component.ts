import { MatDialogRef } from '@angular/material';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-modal-form',
  templateUrl: './event-modal-form.component.html',
  styleUrls: ['./event-modal-form.component.scss']
})
export class EventModalFormComponent {

  constructor(private router: Router,
              private dialogRef: MatDialogRef<EventModalFormComponent>) {}
  onClose() {
    this.router.navigate(['dashboard/communication/avis']);
    this.dialogRef.close();
  }
}

