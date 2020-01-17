import { log } from 'util';
import { WitnessService } from './shared/services/witness.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fumainerie-angular';
  constructor(private witnessService: WitnessService) {}

  obseTest = new BehaviorSubject(23);
  ngOnInit() {
    if (window.screen.width < 600) {
      this.witnessService.mobile = true;
    }

    this.obseTest.asObservable().subscribe(value => console.log(value));

    this.obseTest.next(24);
  }
}
