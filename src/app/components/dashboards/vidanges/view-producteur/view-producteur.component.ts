import { Component, OnInit, Input } from '@angular/core';
import { DrainingRequestService } from '../../../../shared/services/drainingRequest.service';
import { UserService } from '../../../../shared/services/user.service';
import { DrainingService } from '../../../../shared/services/draining.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, DateAdapter } from '@angular/material';
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
  // Producteur
arrayDrainingRequest: DrainingRequest[] = [];

allDrainingRequestForCurrentUser: DrainingRequest[] = [];
allDrainingForCurrentUser: Draining [] = [];
emergency: DrainingRequest [] = [];
allDoneDrainingForProducteur: Draining[];
nextDrainingForProducteur: DrainingRequest;
isEmergencyAlreadyCreate = false;
isRequestAlreadyCreate = false;
emergencyForCurrentUser: DrainingRequest[] = [];

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

  this.drainingRequestService.getAllDrainingRequestForCurrentUser(this.currentUser.id).subscribe( (data) => {
     // tslint:disable-next-line: prefer-for-of
     for (let i = 0; i < data.length; i++) {
       this.allDrainingRequestForCurrentUser = data;

       if ( data[i].emergency === 1) {
         this.emergencyForCurrentUser.push(data[i]);
         this.allDrainingRequestForCurrentUser.splice(i, 1);
         this.isEmergencyAlreadyCreate = true;

     } else if ( data[i].accepted === 0 ) {
       this.isRequestAlreadyCreate = true;
     }
    }
  });

  this.drainingService.getDrainingForCurrentUser(this.currentUser.id).subscribe( drainings => {
    this.allDrainingForCurrentUser = drainings;
   });

  this.drainingService.getNextDrainingByUserId(this.currentUser.id).subscribe( data => {
     this.nextDrainingForProducteur = data;
    });
  }

  // Montre les détails de la vidange en clickant sur details
  openDetailsDraining(drainingDetail: Draining) {
    drainingDetail.show = !drainingDetail.show;
    return drainingDetail;
  }

  // Creation des demandes
  addRequest(drainingRequest: any) {
    drainingRequest.session_date = drainingRequest.session_date.toLocaleDateString().split('/').reverse().join('-');
    drainingRequest.name = drainingRequest.slot_id.name;
    drainingRequest.slot_id = drainingRequest.slot_id.id;

    return this.arrayDrainingRequest.push(drainingRequest);
  }

// Envoi un tableau de demande de vidange
  submit() {
    for (const drainingRequest of this.arrayDrainingRequest) {
     this.allDrainingRequestForCurrentUser.push(drainingRequest);
     }
    this.isRequestAlreadyCreate = true;
    return this.drainingRequestService.postDrainingRequest(this.arrayDrainingRequest).subscribe();
  }

// Envoi d'une demande urgente de vidange
sendEmergency() {
  // Convertissement Date.
  const currentDateString = new Date().toLocaleDateString().split('/').reverse().join('-');
  // // Creation d'une nouvelle demande de vidange.
  const drainingRequestEmergency = new DrainingRequest();

  drainingRequestEmergency.user_id = this.currentUser.id;
  drainingRequestEmergency.session_date = currentDateString;
  drainingRequestEmergency.slot_id = 1;
  drainingRequestEmergency.emergency = 1;
  this.slotData.forEach( element => {
    if ( drainingRequestEmergency.slot_id === element.id) {
    drainingRequestEmergency.name = element.name;
    }
  });
  // this.allDrainingRequestForCurrentUser.push(drainingRequestEmergency);
  this.emergency.push(drainingRequestEmergency);
  return this.drainingRequestService.postDrainingRequest(this.emergency).subscribe();
  }
}
