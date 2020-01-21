import { UserService } from './../../shared/services/user.service';
import { DashboardService } from './../../shared/services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../../src/app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

<<<<<<< HEAD
  constructor(private service: DashboardService, private userService: UserService) { }

=======
  constructor(private userService: UserService ) { }
>>>>>>> develop

  user: User;
  accountStatus: number;

  ngOnInit() {
<<<<<<< HEAD
  this.user = this.userService.user1;
  }
  changeStatus() {
    this.StatusAccountIsComplete = !this.StatusAccountIsComplete;
  }
  getAccountStatus() {

=======
    this.user = this.userService.user;
    this.accountStatus = this.user.account_status;
>>>>>>> develop
  }
}
