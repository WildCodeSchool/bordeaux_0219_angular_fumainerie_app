import { __decorate } from "tslib";
import { NewsletterModalComponent } from './../../modals/newsletter-modal/newsletter-modal.component';
import { Component } from '@angular/core';
import { emailValidator } from '../../../shared/validators/email-validator';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
let ContactComponent = class ContactComponent {
    constructor(http, dialog) {
        this.http = http;
        this.dialog = dialog;
        this.submitted = false;
        // tslint:disable-next-line: max-line-length
        this.mailChimpEndpoint = 'https://zaclys.us4.list-manage.com/subscribe/post-json?u=a1a172a1f21c9caa69eba4268&id=bc3bb22ceb&';
        this.error = '';
        this.mailForm = new FormGroup({
            EMAIL: new FormControl('', [Validators.required, emailValidator]),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.error = '';
        if (this.mailForm.status === 'VALID' && this.mailForm.status === 'VALID') {
            const params = new HttpParams()
                .set('EMAIL', (this.mailForm.get('EMAIL').value))
                .set('b_a1a172a1f21c9caa69eba4268_bc3bb22ceb', ''); // hidden input name
            const mailChimpUrl = this.mailChimpEndpoint + params.toString();
            // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
            this.http.jsonp(mailChimpUrl, 'c').subscribe(response => {
                if (response.result && response.result !== 'error') {
                    this.submitted = true;
                }
                else {
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
};
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.scss']
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map