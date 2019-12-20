import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArrayName, FormControl } from '@angular/forms';
import { DrainingService } from '../../../shared/services/draining.service';
import { Draining } from '../../../shared/models/draining';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-vidanges',
  templateUrl: './vidanges.component.html',
  styleUrls: ['./vidanges.component.scss']
})
export class VidangesComponent implements OnInit {
  currentuser: User;

  drainingForm: Draining = new FormGroup({
    date: new FormControl(''),
    time: new FormControl(''),
  });

  constructor(private drainingRequestService: DrainingService) { }

  ngOnInit() {
    this.drainingRequestService.getUserId().subscribe( (data: User) => {
      this.currentuser = data;
    });
  }

onSubmit(drainingRequest: Draining) {
  const test = this.drainingForm.controls.userId.value = this.currentuser.id;
  console.log(this.drainingForm.value);
  // console.log(test);
  return this.drainingRequestService.postDrainingRequest(drainingRequest).subscribe();
}

}
