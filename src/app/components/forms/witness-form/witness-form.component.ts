import { witness } from './../../modals/generic-modal/modalText';
import { GenericModalComponent } from './../../modals/generic-modal/generic-modal.component';
import { WitnessService } from '../../../shared/services/witness.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material';

@Component({
  selector: 'app-witness-form',
  templateUrl: './witness-form.component.html',
  styleUrls: ['./witness-form.component.scss']
})
export class WitnessFormComponent implements OnInit {
  constructor(private witnessService: WitnessService,
              private router: Router,
              private formbuilder: FormBuilder,
              public dialog: MatDialog) { }

  witnessForm: FormGroup;

  ngOnInit() {
    this.witnessForm = this.formbuilder.group({
      note: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  resetForm() {
    this.witnessForm.reset();
  }

  onClose() {
      this.router.navigate(['dashboard/communication/avis']);
  }

  onSubmitWitnessForm() {
    console.log(this.witnessForm.value);
    this.witnessService.createWitness(this.witnessForm.value).subscribe();
    const dialogRef = this.dialog.open(GenericModalComponent, {
      width: '50%',
      data: witness,
    });
    dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard/communication/avis']);
    }
    );
  }
}

