import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { SigninService } from 'src/app/shared/services/signin.service';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})

export class SignInFormComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private router: Router,
              private formbuilder: FormBuilder,
              private signInService: SigninService) { }

  ngOnInit() {
    this.signInForm = this.formbuilder.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required]]
    });
  }


  userConnexion() {
    this.signInService.connectUser(this.signInForm.value).subscribe(() => {
      console.log(this.signInForm.value);
      // this.router.navigate(['/dashboard']);
    });
  }
  goToSignUp() {
    this.router.navigate(['/inscription']);
  }
}

