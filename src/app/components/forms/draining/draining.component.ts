import { DrainingService } from './../../../shared/services/draining.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Draining } from '../../../shared/models/draining';

@Component({
  selector: 'app-draining',
  templateUrl: './draining.component.html',
  styleUrls: ['./draining.component.scss']
})
export class DrainingComponent implements OnInit {
  drainingForm: FormGroup;

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DrainingComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private drainingService: DrainingService) { }

  ngOnInit() {
    console.log(this.data);

    this.drainingForm = this.fb.group({
      id: [this.data.id, Validators.required],
      session_date: [this.data.session_date, Validators.required],
      name: [this.data.name, Validators.required],
      user_id: [this.data.user_id, Validators.required],
      comments: ['null', Validators.required],
      done_draining: [this.data.done_draining, Validators.required],
      site_arrival_time: ['00:00', Validators.required],
      site_leave_time: ['00:00', Validators.required],
      weight: ['0', Validators.required],
      sawdust_weight: ['0', Validators.required],
   });
  }
  get done_draining() {
    return this.drainingForm.get('done_draining');
  }
  async onFormSubmit() {
    delete this.drainingForm.value.name;

    return this.drainingService.saveDrainingDone(this.drainingForm.value).subscribe(() => {
    this.dialogRef.close();
    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

