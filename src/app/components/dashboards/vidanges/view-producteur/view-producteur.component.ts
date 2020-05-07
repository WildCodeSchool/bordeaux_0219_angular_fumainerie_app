import { Component, OnInit, Input } from '@angular/core';
import { DrainingRequestService } from '../../../../shared/services/drainingRequest.service';
import { DrainingService } from '../../../../shared/services/draining.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material';
import { Slot } from '../../../../shared/models/slot';
import { User } from '../../../../shared/models/user';
import { DrainingRequest } from '../../../../shared/models/drainingRequest';
import { Draining } from '../../../../shared/models/draining';

@Component({
  selector: 'app-view-producteur',
  templateUrl: './view-producteur.component.html',
  styleUrls: ['./view-producteur.component.scss']
})
export class ViewProducteurComponent implements OnInit {
  @Input() currentUser: User;

  slotData: Slot[];
  drainingFormRequest: FormGroup;
  accepteDrainingArray: any[] = [];
  currentDateString = new Date().toLocaleDateString().split('/').reverse().join('-');
  arrayDrainingRequest: DrainingRequest[] = [];
  allDrainingRequest: DrainingRequest[] = [];
  allDraining: Draining[] = [];
  emergency: DrainingRequest[] = [];
  allDoneDrainingForProducteur: Draining[];
  nextDraining: Draining;
  isRequestAlreadyCreate = false;

  constructor(private drainingRequestService: DrainingRequestService,
              private drainingService: DrainingService,
              private fb: FormBuilder, private dateAdapter: DateAdapter<any>) { this.dateAdapter.setLocale('fr'); }

  ngOnInit() {
  this.drainingRequestService.getSlot().subscribe( data => {
        this.slotData = data;
        this.drainingFormRequest = this.fb.group({
         session_date: ['', Validators.required],
         slot_id: ['', Validators.required],
         user_id: [this.currentUser.id, Validators.required]
      });
  });

  this.drainingRequestService.getAllDrainingRequest(this.currentUser.id).subscribe( (data) => {
     for (const [i, draining] of data.entries()) {
       this.allDrainingRequest = data;

       if ( draining.emergency === 1) {
         this.emergency.push(draining);
         this.allDrainingRequest.splice(i, 1);

     } else if ( draining.accepted === 0 ) {
       this.isRequestAlreadyCreate = true; }}
  });

  this.drainingService.getDraining(this.currentUser.id).subscribe( drainings => {
    this.allDraining = drainings;
   });

  this.drainingService.getNextDrainingByUserId(this.currentUser.id).subscribe( data => {
    this.nextDraining = data;
  });
  }

  // Show draining's details
  openDetailsDraining(drainingDetail: Draining) {
    return drainingDetail.show = !drainingDetail.show;
  }

  // Create draining request limit to 3.
  addRequest(drainingRequest: any) {
    drainingRequest.session_date = drainingRequest.session_date.toLocaleDateString().split('/').reverse().join('-');
    drainingRequest.name = drainingRequest.slot_id.name;
    drainingRequest.slot_id = drainingRequest.slot_id.id;

    return this.arrayDrainingRequest.push(drainingRequest);
  }

  // Push draining's array
  submit() {
    for (const drainingRequest of this.arrayDrainingRequest) {
     this.allDrainingRequest.push(drainingRequest);
     }
    this.isRequestAlreadyCreate = true;
    return this.drainingRequestService.postDrainingRequest(this.arrayDrainingRequest).subscribe();
  }

  // push emergency draining's request
  sendEmergency() {
  // create new draining request
    const drainingRequestEmergency = new DrainingRequest();

    drainingRequestEmergency.user_id = this.currentUser.id;
    drainingRequestEmergency.session_date = this.currentDateString;
    drainingRequestEmergency.emergency = 1;
    drainingRequestEmergency.slot_id = this.slotData[0].id;
    this.slotData.forEach( element => {
      if ( drainingRequestEmergency.slot_id === element.id) {
      drainingRequestEmergency.name = element.name; }
    });

    this.emergency.push(drainingRequestEmergency);
    return this.drainingRequestService.postDrainingRequest(this.emergency).subscribe();
}
}
