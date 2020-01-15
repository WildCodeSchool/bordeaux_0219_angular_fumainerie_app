import { User } from './../../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  validationUserForm: FormGroup;
  validationHomeForm: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private userService: UserService,
              public dialog: MatDialog) { }

    user: User;

    ngOnInit() {
      this.user = this.userService.user;
      this.validationUserForm = this.formbuilder.group({

        birth_date: ['', [Validators.required]],
        phone: ['', [Validators.required]]
      });
      this.validationHomeForm = this.formbuilder.group({
        type: ['', [Validators.required]],
        adress: ['', [Validators.required]],
        adress_plus : ['', [Validators.required]],
        zip: ['', [Validators.required]],
        city: ['', [Validators.required]],
        adult_nbr: ['', [Validators.required]],
        child_nbr: ['', [Validators.required]]
      });
    }
    completeHome() {
      return this.userService.postHomeForm(this.validationHomeForm.value, this.validationUserForm.value).subscribe();
    }

  }

