import { UserService } from './../../shared/services/user.service';
import { DashboardService } from './../../shared/services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DashboardService, private userService: UserService) { }


  user: User;
  StatusAccountIsComplete = true;

  ngOnInit() {
  this.user = this.userService.user1;
  }
  changeStatus() {
    this.StatusAccountIsComplete = !this.StatusAccountIsComplete;
  }
  getAccountStatus() {

  }
}
