import { User } from './../../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UserService } from '../../../../../src/app/shared/services/user.service';
import { Home } from 'src/app/shared/models/home';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  validationHomeForm: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              public dialog: MatDialog) { }

    user: User;

    ngOnInit() {
      this.user = this.userService.user;
      this.validationHomeForm = this.formbuilder.group({
        type: ['', [Validators.required]],
        address: ['', [Validators.required]],
        address_plus : ['', [Validators.required]],
        zip: ['', [Validators.required]],
        city: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        adult_nbr: ['', [Validators.required]],
        child_nbr: ['', [Validators.required]]
      });
    }
    completeHome() {
      this.userService.postHomeForm(this.validationHomeForm.value, this.user).subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    }
  }

