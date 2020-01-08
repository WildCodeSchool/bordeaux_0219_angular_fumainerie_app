import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Witness } from '../../../../../shared/models/witness';
import { WitnessService } from '../../../../../shared/services/witness.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-witness',
  templateUrl: './witness.component.html',
  styleUrls: ['./witness.component.scss']
})
export class WitnessComponent implements OnInit {
  witness: Witness[];
  @Input() checked: boolean;
  status = new FormControl();


  constructor(private witnessService: WitnessService) { }

  ngOnInit() {
    this.witnessService.getValidedWitness().subscribe((witness) => {
      this.witness = witness ;

    }) ;
  }
  onChange(index: number) {
    console.log(this.status.value);
    this.witness[index].status = this.status.value;
    console.log(this.witness[index]);
    this.witnessService.modifyWitness (this.witness[index]).subscribe();
}
}


/* this.witnessService.modifyWitness().subscribe; */
