import { DashboardService } from './../../shared/services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DashboardService) { }



  StatusAccountIsComplete: boolean;
  ngOnInit() {
    // this.service.getAccountStatus(this.StatusAccountIsComplete);
    this.StatusAccountIsComplete = false;
  }

}
