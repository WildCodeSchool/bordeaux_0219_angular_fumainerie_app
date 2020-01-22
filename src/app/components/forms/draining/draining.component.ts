import { DrainingService } from './../../../shared/services/draining.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-draining',
  templateUrl: './draining.component.html',
  styleUrls: ['./draining.component.scss']
})
export class DrainingComponent implements OnInit {
  drainingForm: FormGroup;

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DrainingComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service: DrainingService) { }

  ngOnInit() {
    this.drainingForm = this.fb.group({
      session_date: [this.data.session_date, Validators.required],
      name: [this.data.name, Validators.required],
      user_id: [this.data.user_id, Validators.required],
      comments: ['', Validators.required],
      done_draining: [this.data.done_draining, Validators.required],
      site_arrival_time: ['', Validators.required],
      site_leave_time: ['', Validators.required],
      weight: ['', Validators.required],
      sawdust_weight: ['', Validators.required],
   });
  }
  get done_draining() {
    return this.drainingForm.get('done_draining');
  }
  onFormSubmit() {
    this.service.savePerson(this.drainingForm.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

