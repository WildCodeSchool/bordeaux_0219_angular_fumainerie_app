import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DrainingService } from '../../../shared/services/draining.service';
import { User } from 'src/app/shared/models/user';
import { Draining } from 'src/app/shared/models/draining';
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
  allDrainingByUser: Draining[];

  constructor(private drainingRequestService: DrainingService, private fb: FormBuilder, private dateAdapter: DateAdapter<any>) {
    this.dateAdapter.setLocale('fr');
  }

  ngOnInit() {
    this.drainingRequestService.getUserId().subscribe( (data: User) => {
      this.currentuser = data[0];
      console.log(this.currentuser);
    });

    this.drainingRequestService.getSlot().subscribe( data => {
      this.slotData = data;
      this.drainingFormRequest = this.fb.group({
        date: [''],
        slots: ['']
      });
    });

    this.drainingRequestService.getAllDrainingRequestByUser(this.currentuser).subscribe( (data) => {
      console.log(data);
      this.allDrainingByUser = data;
      console.log(this.allDrainingByUser);
    });
  }

onSubmit(drainingRequest) {
// Convert date into YYYY-MM-DD
  const element = new Date(drainingRequest.date);
  let dateEvent = JSON.stringify(element);
  dateEvent = dateEvent.slice(1, 11);

  const draining = new Draining();
  draining.user_id = this.currentuser.id;
  draining.session_date = dateEvent;
  draining.slot_id = drainingRequest.slots;
  console.log(this.currentuser.id);
  this.allDrainingByUser.push(draining);


  return this.drainingRequestService.postDrainingRequest(draining).subscribe();
}
}

