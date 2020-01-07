import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DrainingRequestService } from '../../../shared/services/drainingRequest.service';
import { User } from 'src/app/shared/models/user';
import { DrainingRequest } from 'src/app/shared/models/drainingRequest';
import { DateAdapter} from '@angular/material/core';
import { UserService } from '../../../shared/services/user.service';
import { DrainingService } from '../../../shared/services/draining.service';
import { Draining } from '../../../shared/models/draining';


@Component({
  selector: 'app-vidanges',
  templateUrl: './vidanges.component.html',
  styleUrls: ['./vidanges.component.scss']
})
export class VidangesComponent implements OnInit {

  // currentuser: User;
  slotData;
  currentUser: User;
  drainingFormRequest: FormGroup;
  allDrainingRequestByUser: DrainingRequest[] = [];
  allDraining: Draining [];
  openDetail = false;

  // tslint:disable-next-line: max-line-length
  constructor(private drainingRequestService: DrainingRequestService,
              private userService: UserService,
              private drainingService: DrainingService,
              private fb: FormBuilder, private dateAdapter: DateAdapter<any>) {

                this.dateAdapter.setLocale('fr');
  }

  ngOnInit() {
   this.currentUser = this.userService.user1;

   this.drainingRequestService.getAllDrainingRequestByUser(this.currentUser.id).subscribe( (data2) => {
      this.allDrainingRequestByUser = data2;
      console.log(this.allDrainingRequestByUser);
      });

   this.drainingService.getDrainingByUserId(this.currentUser.id).subscribe( drainings => {
    this.allDraining = drainings;
  });

   this.drainingRequestService.getSlot().subscribe( data => {
        this.slotData = data;
        this.drainingFormRequest = this.fb.group({
         date: [''],
         slots: ['']
      });
  });


  }

onSubmit(drainingRequest) {
  const dateString = drainingRequest.date.toLocaleDateString().split('/').reverse().join('-');

  const draining = new DrainingRequest();
  draining.user_id = this.currentUser.id;
  draining.session_date = dateString;
  draining.slot_id = drainingRequest.slots;
  console.log(this.currentUser.id);
  this.allDrainingRequestByUser.push(draining);

  return this.drainingRequestService.postDrainingRequest(draining).subscribe();
}

sendEmergency() {
  const currentDateString = new Date().toLocaleDateString().split('/').reverse().join('-');

  const drainingRequestEmergency = new DrainingRequest();

  drainingRequestEmergency.user_id = this.currentUser.id;
  drainingRequestEmergency.session_date = currentDateString;
  drainingRequestEmergency.slot_id = '1';
  console.log(drainingRequestEmergency);

  return this.drainingRequestService.postEmergencyDrainingRequest(drainingRequestEmergency ).subscribe();
}

openDetailsDraining(drainingDetail: Draining) {
    drainingDetail.show = !drainingDetail.show;

    return drainingDetail;
  }
}
