import { emailValidator } from 'src/app/shared/validators/email-validator';
import { SignupService } from './../../../shared/services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(private router: Router,
              private formbuilder: FormBuilder,
              private signupService: SignupService) { }

    signUpForm: FormGroup;

    ngOnInit() {
      this.signUpForm = this.formbuilder.group({
        email: ['', Validators.required],
        password: ['', [Validators.required, emailValidator]]});
      }

      onSignUp() {
        this.signupService.postNewUser(this.signUpForm.value);
      }
    }




