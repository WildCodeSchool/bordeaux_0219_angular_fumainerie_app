import { NewsletterModalComponent } from './../../modals/newsletter-modal/newsletter-modal.component';
import { Component, OnInit } from '@angular/core';
import { emailValidator } from '../../../shared/validators/email-validator';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MatDialog} from '@angular/material';
import { HttpClient, HttpParams} from '@angular/common/http';
import { stringify } from 'querystring';

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
  // tslint:disable-next-line: max-line-length
  mailChimpEndpoint = 'https://zaclys.us4.list-manage.com/subscribe/post-json?u=a1a172a1f21c9caa69eba4268&id=bc3bb22ceb&';
  // mailChimpEndpoint = 'https://gmail.us4.list-manage.com/subscribe/post-json?u=46dee92b175ee958c07343421&id=8aa6f29244&';
  error = '';
  constructor(private http: HttpClient,
              public dialog: MatDialog) { }


    mailForm = new FormGroup({
      EMAIL: new FormControl('', [Validators.required, emailValidator]),
    });


    ngOnInit() {
    }

    onSubmit() {
      this.error = '';
      if (this.mailForm.status === 'VALID' && this.mailForm.status === 'VALID') {

        const params = new HttpParams()
        .set('EMAIL', (this.mailForm.get('EMAIL').value))
        .set('b_a1a172a1f21c9caa69eba4268_bc3bb22ceb', ''); // hidden input name
        // .set('b_46dee92b175ee958c07343421_8aa6f29244', ''); // hidden input name

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
        const dialogRef = this.dialog.open(NewsletterModalComponent, {
          width: '50%'
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.mailForm.reset();
        });
      }
    }
  }
