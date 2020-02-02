import { event } from './../../modals/generic-modal/modalText';
import { GenericModalComponent } from './../../modals/generic-modal/generic-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material';
import { EventService } from '../../../shared/services/event.service';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit {

  constructor(private router: Router,
              private eventService: EventService,
              private formbuilder: FormBuilder,
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
      this.router.navigate(['/dashboard/evenements']);
    }

    onSubmitEventForm() {
      console.log('modale ouverte?');
      console.log(this.eventForm.value);
      this.eventForm.value.date = this.eventForm.value.date.toLocaleDateString().split('/').reverse().join('-');
      this.eventForm.value.time = this.eventForm.value.time + ':00';
      if (this.eventForm.value.author === '') {
        this.eventForm.value.author = 'La Collégiale';
      }

      this.eventService.createEvents(this.eventForm.value).subscribe();
      const dialogRef = this.dialog.open(GenericModalComponent , {
        width: '50%',
        data: event,
      });

      dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['/dashboard/evenements']);
        });
    }
  }

