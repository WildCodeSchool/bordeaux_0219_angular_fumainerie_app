import { DialogSignupComponent } from './dialog-signup/dialog-signup.component';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { SignupService } from './../../../shared/services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(private router: Router,
              private formbuilder: FormBuilder,
              private signupService: SignupService,
              public dialog: MatDialog) { }

    signUpForm: FormGroup;

    ngOnInit() {
      this.signUpForm = this.formbuilder.group({
        email: ['', [Validators.required, emailValidator]],
        password: ['', [Validators.required]],
        username: ['', Validators.required],
        lastname: ['', Validators.required],
        firstname: ['', Validators.required]
      });
      }

      onSignUp() {
        this.signupService.postNewUser(this.signUpForm.value);
        this.dialog.open(DialogSignupComponent, {width: '250px'});
      }
      goToSignIn() {
        this.router.navigate(['/connexion']);
      }
    }




