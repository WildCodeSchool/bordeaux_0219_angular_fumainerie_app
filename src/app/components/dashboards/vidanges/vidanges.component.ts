import { Slot } from './../../../shared/models/slot';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  slotData: Slot[];
  slotById: Slot[];
  currentUser: User;
  drainingFormRequest: FormGroup;
  allDrainingRequestByUser: DrainingRequest[] = [];
  allDraining: Draining [] = [];
  nextDraining: Draining;

  // tslint:disable-next-line: max-line-length
  constructor(private drainingRequestService: DrainingRequestService,
              private userService: UserService,
              private drainingService: DrainingService,
              private fb: FormBuilder, private dateAdapter: DateAdapter<any>) {this.dateAdapter.setLocale('fr');
            }

  ngOnInit() {
   this.currentUser = this.userService.user;

   this.drainingRequestService.getAllDrainingRequestByUser(this.currentUser.id).subscribe( (data2) => {
      this.allDrainingRequestByUser = data2;
   });

   this.drainingService.getDrainingByUserId(this.currentUser.id).subscribe( drainings => {
    this.allDraining = drainings;
   });

   this.drainingService.getNextDrainingByUserId(this.currentUser.id).subscribe( draining => {
    this.nextDraining = draining;
   });

   this.drainingRequestService.getSlot().subscribe( data => {
        this.slotData = data;
        this.drainingFormRequest = this.fb.group({
         date: ['', Validators.required],
         slots: ['', Validators.required]
      });
  });
}

// Show detail when click on details
  openDetailsDraining(drainingDetail: Draining) {
    drainingDetail.show = !drainingDetail.show;
    return drainingDetail;
  }

// Send a draining request
  onSubmit(drainingRequest) {
    // Convert date
    const dateString = drainingRequest.date.toLocaleDateString().split('/').reverse().join('-');

    const draining = new DrainingRequest();
    draining.user_id = this.currentUser.id;
    draining.session_date = dateString;
    draining.slot_id = drainingRequest.slots;

    // Print new drainong request on the front
    const fakedraining = new DrainingRequest();
    fakedraining.user_id = this.currentUser.id;
    fakedraining.session_date = dateString;
    fakedraining.slot_id = drainingRequest.slots;
    this.slotData.forEach( element => {
      if ( fakedraining.slot_id === element.id) {
        fakedraining.name = element.name;
      }
    });

    this.allDrainingRequestByUser.push(fakedraining);

    return this.drainingRequestService.postDrainingRequest(draining).subscribe();
  }

  // Send a emergency draining request
  sendEmergency() {
    // Convert date.
    const currentDateString = new Date().toLocaleDateString().split('/').reverse().join('-');
    // Create a new draining request.
    const drainingRequestEmergency = new DrainingRequest();

    drainingRequestEmergency.user_id = this.currentUser.id;
    drainingRequestEmergency.session_date = currentDateString;
    drainingRequestEmergency.slot_id = 1;

    // Print new drainong request on the front
    const fakedraining = new DrainingRequest();
    fakedraining.user_id = this.currentUser.id;
    fakedraining.session_date = currentDateString;
    fakedraining.slot_id = 1;
    this.slotData.forEach( element => {
    if ( fakedraining.slot_id === element.id) {
    fakedraining.name = element.name;
    }
  });

    this.allDrainingRequestByUser.push(fakedraining);

    return this.drainingRequestService.postDrainingRequest(drainingRequestEmergency ).subscribe();
  }
}
