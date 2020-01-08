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
  allDraining: Draining [];

  // tslint:disable-next-line: max-line-length
  constructor(private drainingRequestService: DrainingRequestService,
              private userService: UserService,
              private drainingService: DrainingService,
              private fb: FormBuilder, private dateAdapter: DateAdapter<any>) {this.dateAdapter.setLocale('fr');}

  ngOnInit() {
   this.currentUser = this.userService.user1;

   this.drainingRequestService.getAllDrainingRequestByUser(this.currentUser.id).subscribe( (data2) => {
      this.allDrainingRequestByUser = data2;
      console.log(data2);

   });

   this.drainingService.getDrainingByUserId(this.currentUser.id).subscribe( drainings => {
    this.allDraining = drainings;
   });

   this.drainingRequestService.getSlot().subscribe( data => {
        this.slotData = data;
        this.drainingFormRequest = this.fb.group({
         date: ['', Validators.required],
         slots: ['', Validators.required]
      });

  });

}

// Montre les détails de la vidnage en clickant sur details
  openDetailsDraining(drainingDetail: Draining) {
    drainingDetail.show = !drainingDetail.show;
    return drainingDetail;
  }

// Envoi d'une demande de vidange
  onSubmit(drainingRequest) {
    // Convertissement Date.
    const dateString = drainingRequest.date.toLocaleDateString().split('/').reverse().join('-');

    const draining = new DrainingRequest();
    draining.user_id = this.currentUser.id;
    draining.session_date = dateString;
    draining.slot_id = drainingRequest.slots;
    this.allDrainingRequestByUser.push(draining);


    return this.drainingRequestService.postDrainingRequest(draining).subscribe();
  }

// Envoi d'une demande urgente de vidange
  sendEmergency() {
    // Convertissement Date.
    const currentDateString = new Date().toLocaleDateString().split('/').reverse().join('-');
    // Creation d'une nouvelle demande de vidange.
    const drainingRequestEmergency = new DrainingRequest();

    drainingRequestEmergency.user_id = this.currentUser.id;
    drainingRequestEmergency.session_date = currentDateString;
    drainingRequestEmergency.slot_id = '1';

    return this.drainingRequestService.postEmergencyDrainingRequest(drainingRequestEmergency ).subscribe();
  }

}
