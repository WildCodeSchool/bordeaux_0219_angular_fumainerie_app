import { partnerList } from './partners-list-mock';
import { Partner } from './../../../shared/models/partner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  partners: Partner[] = partnerList;

  constructor() { }

  ngOnInit() {

  }
}
