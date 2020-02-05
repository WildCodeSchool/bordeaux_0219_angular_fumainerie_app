import { DrainingService } from './../../../../shared/services/draining.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../shared/models/user';
import { Draining } from '../../../../shared/models/draining';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.scss']
})
export class ViewAdminComponent implements OnInit {
  @Input() currentUser: User;
  drainingsUndone: any[] = [];
  drainingsdone: any[] = [];

  constructor(private drainingService: DrainingService) { }

  ngOnInit() {
    this.drainingService.getDrainingsForAdmin().subscribe( data => {
      console.log(data);
      data.forEach(draining => {
        if ( draining.done_draining === 0) {
          this.drainingsUndone.push(draining);
        } else if ( draining.done_draining === 1) {
          this.drainingsdone.push(draining);
        }
      });
    });
  }

}
