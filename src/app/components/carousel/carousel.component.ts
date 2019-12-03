
import { Component, OnInit } from '@angular/core';
import { };




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  constructor() { }

  personnalityGallery: Array<string> = [];

  ngOnInit() {
    for ( let i = 1 ; i < 10; i++ ) {
      this.personnalityGallery.push(`../../../assets/images/Temp${ i }.jpg`);
   }
  }
  }
