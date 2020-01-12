import { WitnessService } from './../../../shared/services/witness.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-witness-delete-modal',
  templateUrl: './witness-delete-modal.component.html',
  styleUrls: ['./witness-delete-modal.component.scss']
})
export class WitnessDeleteModalComponent implements OnInit {
  index: number;
  constructor( private dialogRef: MatDialogRef<WitnessDeleteModalComponent>,
               private witnessService: WitnessService) { }
  ngOnInit() {
  }
  onClose() {
    this.dialogRef.close();
  }
  onDelete() {
    this.witnessService.deleteWitness(this.index).subscribe(() => {
    this.dialogRef.close(true);
    });
  }
}
