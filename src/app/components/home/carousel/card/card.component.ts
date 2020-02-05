import { GouvernancePersonality } from '../../../../shared/models/gouvernance-personality';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() userCard: GouvernancePersonality;

  constructor() { }

  ngOnInit() {
  }
}
