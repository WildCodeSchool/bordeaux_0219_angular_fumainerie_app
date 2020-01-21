import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Validators, FormGroup, FormBuilder } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})

export class SignInFormComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private router: Router,
              private formbuilder: FormBuilder,
              private userService: UserService
              ) { }

  ngOnInit() {
    this.signInForm = this.formbuilder.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required]]
    });
  }

  userConnexion() {
    this.userService.connexion(this.signInForm.value).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  goToSignUp() {
    this.router.navigate(['/inscription']);
  }
}
