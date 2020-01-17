import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-witness-modal',
  templateUrl: './witness-modal.component.html',
  styleUrls: ['./witness-modal.component.scss']
})

export class WitnessModalComponent {
  constructor(private router: Router,
              private dialogRef: MatDialogRef<WitnessModalComponent>) {}

  onClose() {
    this.router.navigate(['dashboard/communication/avis']);
    this.dialogRef.close();
  }
}
