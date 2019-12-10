import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  @Input() init: boolean;
  @Output() opened = new EventEmitter<any>();
  active = false;

  constructor() { }

  ngOnInit() {
    this.active = this.init || false;
  }
  onBurgerClicked() {
    this.active = !this.active;
    this.opened.emit();
  }
}
