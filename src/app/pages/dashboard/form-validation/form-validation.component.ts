import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {


  validationHomeForm: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private userService: UserService,
              public dialog: MatDialog) { }



  ngOnInit() {

    this.validationHomeForm = this.formbuilder.group({
      phoneNumber: ['', [Validators.required]],
      adress: ['', [Validators.required]],
      adressComplement : ['', [Validators.required]],
      zip: ['', [Validators.required]],
      city: ['', [Validators.required]],
      adultNbr: ['', [Validators.required]],
      childNbr: ['', [Validators.required]]
    });

  }
    completeHome() {
      return this.userService.postHomeForm(this.validationHomeForm.value).subscribe();
    }

  }

