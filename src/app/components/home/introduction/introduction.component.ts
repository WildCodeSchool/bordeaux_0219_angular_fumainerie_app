import { Witness } from '../../../shared/models/witness';
import { WitnessService } from '../../../shared/services/witness.service';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';
import { News } from '../../../shared/models/news';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})

export class IntroductionComponent implements OnInit {
  witness: Witness[];
  news: News[];
  constructor(private witnessService: WitnessService, private newsService: NewsService) { }

  ngOnInit() {
    this.witnessService.getValidedWitness().subscribe((witness) => {
      this.witness = witness;
    });

    this.newsService.getValidedNews().subscribe((news) => {
      this.news = news;
    });
  }
}
