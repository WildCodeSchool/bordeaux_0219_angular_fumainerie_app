import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onWitnessForm() {
    this.router.navigate(['question']);
  }

  onQuestionForm() {
    this.router.navigate(['temoigner']);
  }
}
