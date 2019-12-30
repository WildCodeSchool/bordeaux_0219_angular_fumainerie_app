import { Witness } from '../../../../../shared/models/witness';
import { WitnessService } from '../../../../../shared/services/witness.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-witness',
  templateUrl: './witness.component.html',
  styleUrls: ['./witness.component.scss']
})
export class WitnessComponent implements OnInit {
  witness: Witness[];
  constructor(private witnessService: WitnessService) { }

  ngOnInit() {
    this.witnessService.getAllWitness().subscribe((witness) => {
      this.witness = witness;
    });
  }

}
