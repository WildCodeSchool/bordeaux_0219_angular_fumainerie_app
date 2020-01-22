import { UserService } from './../../shared/services/user.service';
import { DashboardService } from './../../shared/services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../../src/app/shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router ) { }

  user: User;
  accountStatus: number;

  ngOnInit() {
    this.user = this.userService.user;
    console.log(localStorage.getItem('JWT-TOKEN'));
    this.accountStatus = this.user.account_status;
  }
  logOut() {
    localStorage.removeItem('JWT-TOKEN');
    this.userService.user = null;
    this.router.navigate(['/accueil']);
  }
}
