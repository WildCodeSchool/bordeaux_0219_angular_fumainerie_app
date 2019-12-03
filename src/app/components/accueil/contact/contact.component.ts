import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    email: ['', [Validators.required, emailValidator]],
    address: this.fb.group({
      street: ['', Validators.required],
      complement: [''],
      zip: ['', Validators.required],
      city: ['', Validators.required]
    })
  });

  newsForm = this.fb.group({
    email: ['', [Validators.required, emailValidator]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    // appel du service.post vers la BSS
    console.log(this.contactForm.value);
  }
}
