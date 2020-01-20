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

  constructor(private userService: UserService,
              private router: Router ) { }

  user: User;

  ngOnInit() {
    this.user = this.userService.user;
  }
  logOut() {
    localStorage.removeItem('JWT-TOKEN');
    this.userService.user = null;
    this.router.navigate(['/accueil']);
  }
}
