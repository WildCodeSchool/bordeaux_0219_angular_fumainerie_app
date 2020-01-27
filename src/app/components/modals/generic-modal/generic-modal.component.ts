import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent  {

  constructor(private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<GenericModalComponent>) {}

onClose() {
this.dialogRef.close();
}
}
