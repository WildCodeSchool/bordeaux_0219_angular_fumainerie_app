import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-vidanges',
  templateUrl: './vidanges.component.html',
  styleUrls: ['./vidanges.component.scss']
})
export class VidangesComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.user;
  }
}
