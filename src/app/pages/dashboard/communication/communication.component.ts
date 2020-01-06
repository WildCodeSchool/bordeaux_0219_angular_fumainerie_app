import { WitnessService } from './../../../shared/services/witness.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit, OnChanges {
  visible: boolean;

  constructor(private witnessService: WitnessService) {}

    ngOnInit() {
      this.visible = this.witnessService.visible;
    }
    ngOnChanges() {
    this.visible = this.witnessService.visible;
  }

}
