import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onWitnessForm() {
    this.router.navigate(['/dashboard/communication/avis/temoigner']);
  }

  onQuestionForm() {
    this.router.navigate(['/dashboard/communication/avis/question']);
  }

  onNewsForm() {
    this.router.navigate(['/dashboard/communication/avis/actualite']);
  }
}
