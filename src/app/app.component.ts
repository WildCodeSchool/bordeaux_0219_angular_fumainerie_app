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
  ngOnInit() {  }
}
