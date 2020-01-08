import { WitnessModalComponent } from '../../../../modals/witness-modal/witness-modal.component';
import { WitnessService } from './../../../../../shared/services/witness.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
              private route: ActivatedRoute,
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
    console.log('modale ouverte?');
    console.log(this.witnessForm.value);
    this.witnessService.createWitness(this.witnessForm.value).subscribe();
    const dialogRef = this.dialog.open(WitnessModalComponent, {
      width: '50%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
