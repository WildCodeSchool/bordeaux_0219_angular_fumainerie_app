
import { NewsletterService } from './../../../shared/services/newsletter.service';
import { Component, OnInit } from '@angular/core';
import { emailValidator } from '../../../shared/validators/email-validator';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatDialog} from '@angular/material';
import { HttpClient, HttpParams} from '@angular/common/http';

interface MailChimpResponse {
  result: string;
  msg: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  submitted = false;
  mailChimpEndpoint = 'https://gmail.us4.list-manage.com/subscribe/post-json?u=46dee92b175ee958c07343421&id=8aa6f29244&';
  error = '';
// <form action="https://gmail.us4.list-manage.com/subscribe/post-json?u=46dee92b175ee958c07343421&amp;id=8aa6f29244"
  constructor(private http: HttpClient,
              private formBuilder: FormBuilder,
              public dialog: MatDialog) { }

  mailForm: FormGroup;

  ngOnInit() {
    this.mailForm = this.formBuilder.group({
      NAME: ['', [Validators.required]],
      EMAIL: ['', [Validators.required, emailValidator]]
    });
  }

  onSubmit() {
      this.error = '';
      if (this.mailForm.status === 'VALID' && this.mailForm.status === 'VALID') {

      const params = new HttpParams()
        .set('NAME', this.mailForm.value)
        .set('EMAIL', this.mailForm.value)
        .set('b_46dee92b175ee958c07343421_8aa6f29244', ''); // hidden input name

      const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
      this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
        if (response.result && response.result !== 'error') {
          this.submitted = true;
        } else {
          this.error = response.msg;
        }
      }, error => {
        console.error(error);
        this.error = 'Sorry, an error occurred.';
      });



   /*    this.newsletterService.addEmail(this.mailForm.value).subscribe();
      const dialogRef = this.dialog.open(NewsletterModalComponent, {
        width: '50%'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      }); */
  }
}
}
