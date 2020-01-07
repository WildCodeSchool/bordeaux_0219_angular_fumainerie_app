import { NewsletterModalComponent } from './newsletter-modal/newsletter-modal.component';
import { NewsletterService } from './../../../shared/services/newsletter.service';
import { Component, OnInit } from '@angular/core';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private newsletterService: NewsletterService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

  mailForm: FormGroup;

  ngOnInit() {
    this.mailForm = this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]]
    });
  }

  onSubmit() {
      this.newsletterService.addEmail(this.mailForm.value).subscribe();
      const dialogRef = this.dialog.open(NewsletterModalComponent, {
        width: '50%'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }
}
