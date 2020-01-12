import { WitnessService } from './../../../shared/services/witness.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-witness-delete-modal',
  templateUrl: './witness-delete-modal.component.html',
  styleUrls: ['./witness-delete-modal.component.scss']
})
export class WitnessDeleteModalComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<WitnessDeleteModalComponent>,
               private witnessService: WitnessService) { }

  ngOnInit() {
  }
  onClose() {
    this.dialogRef.close();
  }
  onDelete() {
    this.witnessService.deleteWitness().subscribe(() => {
    this.dialogRef.close(true);
    });
  }
}
