import { Home } from './../../../shared/models/home';
import { Slot } from './../../../shared/models/slot';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DrainingRequestService } from '../../../shared/services/drainingRequest.service';
import { User } from 'src/app/shared/models/user';
import { DrainingRequest } from './../../../shared/models/drainingRequest';
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

  // tslint:disable-next-line: max-line-length
  constructor(private drainingRequestService: DrainingRequestService,
              private userService: UserService,
              private drainingService: DrainingService,
              private fb: FormBuilder, private dateAdapter: DateAdapter<any>) {this.dateAdapter.setLocale('fr'); }

  slotData: Slot[];
  currentUser: User;
  drainingFormRequest: FormGroup;
  accepteDrainingForm: FormGroup;
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
  // Fin Producteur

  // Vidangeur
  allDrainingRequestUnchecked: any[];


  ngOnInit() {
   this.currentUser = this.userService.user2;

  //  Producteur
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
       const emergency =  data[i].emergency;
       const comparaison2 = data[i].accepted;

       if (emergency === 1) {
         this.emergencyForCurrentUser.push(data[i]);
         this.isEmergencyAlreadyCreate = true;
         this.allDrainingRequestForCurrentUser = data;
         this.allDrainingRequestForCurrentUser.splice(i, 1);
     } else if ( comparaison2 === 0 ) {
         this.isRequestAlreadyCreate = true;
     } else {
     }
    }
  });

   this.drainingService.getDrainingForCurrentUser(this.currentUser.id).subscribe( drainings => {
    this.allDrainingForCurrentUser = drainings;
   });

   this.drainingService.getNextDrainingByUserId(this.currentUser.id).subscribe( data => {
     this.nextDrainingForProducteur = data;
    });
    // Fin producteur

    // Vidangeur
   this.drainingRequestService.getAllDrainingRequestUnchecked().subscribe( data => {
     this.allDrainingRequestUnchecked = data;
     this.accepteDrainingForm = this.fb.group({
      draining_id: ['', Validators.required],
      accepted: ['1']
     });

    });

}
// Producteur

// Montre les détails de la vidange en clickant sur details
  openDetailsDraining(drainingDetail: Draining) {
    drainingDetail.show = !drainingDetail.show;
    return drainingDetail;
  }

  // Creation des demandes
  addRequest(drainingRequest: any) {
    console.log(drainingRequest);
    drainingRequest.session_date = drainingRequest.session_date.toLocaleDateString().split('/').reverse().join('-');
    drainingRequest.name = drainingRequest.slot_id.name;
    drainingRequest.slot_id = drainingRequest.slot_id.id;

    this.arrayDrainingRequest.push(drainingRequest);
  }

// Envoi un tableau de demande de vidange
  submit() {
    for (const drainingRequest of this.arrayDrainingRequest) {
      this.allDrainingRequestForCurrentUser.push(drainingRequest);
    }
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
  this.allDrainingRequestForCurrentUser.push(drainingRequestEmergency);
  this.emergency.push(drainingRequestEmergency);
  return this.drainingRequestService.postDrainingRequest(this.emergency).subscribe();
  }
// Fin producteur

// Vidangeur
openDetailsCustomer(home: Home) {
  home.show = !home.show;
  return home;
}

  async acceptRequest(accepted: any) {

    for ( const request of this.allDrainingRequestUnchecked) {
      for (const draining of request) {
        if ( draining.id === accepted.draining_id) {
          accepted.user_id = draining.user_id;
        }
      }
    }
    // this.accepteDrainingArray.push(accepted);
    // console.log(this.accepteDrainingArray);
    const userId = accepted.user_id;
    console.log(userId);

    this.drainingRequestService.updateDrainingRequest(accepted).subscribe();
    this.drainingService.updateDrainingUser(userId).subscribe();
}

}
