import { EventModalFormComponent } from './../event-modal-form/event-modal-form.component';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog} from '@angular/material';
import { EventService } from '../../../../shared/services/event.service';




@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit {

  constructor(private router: Router,
              private eventService: EventService,
              private formbuilder: FormBuilder,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

  eventForm: FormGroup;
  ngOnInit() {
    this.eventForm = this.formbuilder.group({
      day:  ['', Validators.required],
      time:  ['', Validators.required],
      description: ['', Validators.required],
      auteur: '',
    });
  }
  resetForm() {
    this.eventForm.reset();
  }
  onClose() {
  }
  onSubmitEventForm() {
    console.log('modale ouverte?');
    console.log(this.eventForm.value);
    this.eventService.createEvents(this.eventForm.value).subscribe();
    const dialogRef = this.dialog.open(EventModalFormComponent , {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
