import { UserService } from './../../../shared/services/user.service';
import { WitnessService } from './../../../shared/services/witness.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { User } from '../../../shared/models/user';


@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {}

    ngOnInit() {
      this.user = this.userService.user;
    }

}
