import { Partner } from './../../../shared/models/partner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  partners: Partner[];

  constructor() { }

  ngOnInit() {
    // get les image et noms des partenaires ( images cliquables pour renvoyer sur la page)
  }

}
