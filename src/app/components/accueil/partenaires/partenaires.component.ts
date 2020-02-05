import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/shared/models/partner';
import { partnerList } from '../footer/partners-list-mock';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.scss']
})
export class PartenairesComponent implements OnInit {

  partners: Partner[] = partnerList;

  constructor() { }

  ngOnInit() {
  }

}
