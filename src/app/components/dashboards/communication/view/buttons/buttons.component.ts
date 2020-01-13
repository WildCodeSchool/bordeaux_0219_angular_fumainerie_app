import { NewsService } from './../../../../../shared/services/news.service';
import { WitnessService } from './../../../../../shared/services/witness.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor(private router: Router,
              private witnessService: WitnessService,
              private newsService: NewsService) { }

    ngOnInit() {
      console.log('visible =' + this.witnessService.visible);
    }
    onWitnessForm() {
      this.witnessService.hideWitnessListOnMobile();
      this.router.navigate(['/dashboard/communication/avis/temoigner']);

    }

    onQuestionForm() {
      this.witnessService.hideWitnessListOnMobile();
      this.router.navigate(['/dashboard/communication/avis/question']);
    }

    onNewsForm() {
      this.newsService.hideNewsListOnMobile();
      this.router.navigate(['/dashboard/communication/avis/actualite']);
    }
  }
