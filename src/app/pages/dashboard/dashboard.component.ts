import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../../src/app/shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  accountStatus: number;
  user: User;

  constructor(private userService: UserService,
              private router: Router ) { }


  ngOnInit() {
    this.user = this.userService.user;
    this.accountStatus = this.user.account_status;
    console.log(this.user.account_status);
  }
  logOut() {
    localStorage.removeItem('JWT-TOKEN');
    this.router.navigate(['/accueil']);
  }
}
