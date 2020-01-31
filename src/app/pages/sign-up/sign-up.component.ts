import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/shared/services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,
              private service: SignupService,
              private router: Router) { }

              signUpForm: FormGroup;


  ngOnInit() {
    this.signUpForm = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      birth_date: ['', Validators.required]
    });
  }
  onSignUp() {
    this.service.postNewUser(this.signUpForm.value).subscribe();
  }

  goToSignIn() {
    this.router.navigate(['/connexion']);
  }

}
