import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {
  mail = false;
  phone = false;

  displayFacebook() {
    this.mail = false;
    this.phone = false;
  }
  displayPhone() {
    this.phone = !this.phone;
    this.mail = false;
  }
  displayMail() {
    this.mail = !this.mail;
    this.phone = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
