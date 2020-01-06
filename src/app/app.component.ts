import { WitnessService } from './shared/services/witness.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fumainerie-angular';
  constructor(private witnessService: WitnessService) {}
  ngOnInit() {
    if (window.screen.width < 600) {
      this.witnessService.mobile = true;
    }
  }
}
