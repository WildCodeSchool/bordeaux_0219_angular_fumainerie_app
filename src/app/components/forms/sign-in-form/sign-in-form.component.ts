import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  goToSignUp() {
    this.router.navigate(['/inscription']);
  }
}

