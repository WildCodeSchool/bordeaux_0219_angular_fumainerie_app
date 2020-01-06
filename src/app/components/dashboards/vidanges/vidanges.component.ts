import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DrainingRequestService } from '../../../shared/services/drainingRequest.service';
import { User } from 'src/app/shared/models/user';
import { DrainingRequest } from 'src/app/shared/models/drainingRequest';
import { DateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-vidanges',
  templateUrl: './vidanges.component.html',
  styleUrls: ['./vidanges.component.scss']
})
export class VidangesComponent implements OnInit {

  currentuser: User;
  slotData;
  drainingFormRequest: FormGroup;
  allDrainingRequestByUser: DrainingRequest[];
  allDraining: DrainingRequest[];

  constructor(private drainingRequestService: DrainingRequestService, private fb: FormBuilder, private dateAdapter: DateAdapter<any>) {
    this.dateAdapter.setLocale('fr');
  }

  ngOnInit() {
    this.drainingRequestService.getUserId().subscribe( (data: User) => {
      // console.log(data);
      this.currentuser = data[0];
      // console.log(this.currentuser);

      this.drainingRequestService.getAllDrainingRequestByUser(data[0].id).subscribe( (data2) => {
        console.log(data2);
        this.allDrainingRequestByUser = data2;
        console.log(this.allDrainingRequestByUser);
      });

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
// Convert date into YYYY-MM-DD
  const element = new Date(drainingRequest.date);
  let dateEvent = JSON.stringify(element);
  dateEvent = dateEvent.slice(1, 11);

  const draining = new DrainingRequest();
  draining.user_id = this.currentuser.id;
  draining.session_date = dateEvent;
  draining.slot_id = drainingRequest.slots;
  console.log(this.currentuser.id);
  this.allDrainingRequestByUser.push(draining);


  return this.drainingRequestService.postDrainingRequest(draining).subscribe();
}
}

