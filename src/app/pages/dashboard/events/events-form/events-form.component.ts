import { Event } from './../../../../shared/models/events';
import { UserService } from './../../../../shared/services/user.service';
import { EventModalFormComponent } from '../../../../components/modals/event-modal-form/event-modal-form.component';
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
              private userService: UserService,
              public dialog: MatDialog) { }

    eventForm: FormGroup;
  ngOnInit() {
    this.eventForm = this.formbuilder.group({
      date:  ['', Validators.required],
      time:  ['', Validators.required],
      description: ['', Validators.required],
      author: '',
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
    this.eventForm.value.date = this.eventForm.value.date.toLocaleDateString().split('/').reverse().join('-');
    this.eventForm.value.time = this.eventForm.value.time + ':00';
    if (this.eventForm.value.author === '') {
      this.eventForm.value.author = 'La direction';
    }
    this.eventService.createEvents(this.eventForm.value).subscribe();
    const dialogRef = this.dialog.open(EventModalFormComponent , {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
