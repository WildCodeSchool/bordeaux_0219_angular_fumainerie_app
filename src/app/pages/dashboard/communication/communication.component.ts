import { NewsService } from './../../../shared/services/news.service';
import { WitnessService } from './../../../shared/services/witness.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit, OnChanges {
  visible: boolean;

  constructor(private witnessService: WitnessService,
              private newsService: NewsService) {}

    ngOnInit() {
      this.visible = this.witnessService.visible;
      this.visible = this.newsService.visible;
    }
    ngOnChanges() {
    this.visible = this.witnessService.visible;
    this.visible = this.newsService.visible; // vérifier de pouvoir mettre deux visible
  }

}
// ajouter le news modal
