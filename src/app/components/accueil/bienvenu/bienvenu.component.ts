import { Witness } from './../../../shared/models/witness';
import { WitnessService } from './../../../shared/services/witness.service';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';
import { News } from '../../../shared/models/news';

@Component({
  selector: 'app-bienvenu',
  templateUrl: './bienvenu.component.html',
  styleUrls: ['./bienvenu.component.scss']
})


export class BienvenuComponent implements OnInit {
  witness: Witness[];
  news: News[];
  constructor(private witnessService: WitnessService, private newsService: NewsService) { }

  ngOnInit() {
    this.witnessService.getAllWitness().subscribe((witness) => {
      this.witness = witness;
    });

    this.newsService.getAllNews().subscribe((news) => {
      this.news = news;
    });
  }
}
