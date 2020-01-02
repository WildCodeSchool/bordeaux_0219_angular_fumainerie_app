import { Witness } from './../../../shared/models/witness';
import { WitnessService } from './../../../shared/services/witness.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bienvenu',
  templateUrl: './bienvenu.component.html',
  styleUrls: ['./bienvenu.component.scss']
})
export class BienvenuComponent implements OnInit {
 witness: Witness[];
  constructor(private witnessService: WitnessService) { }

  ngOnInit() {
    this.witnessService.getAllWitness().subscribe((witness) => {
      this.witness = witness;
    });
  }
}

