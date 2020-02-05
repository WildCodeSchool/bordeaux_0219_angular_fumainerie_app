import { Component, OnInit, Input } from '@angular/core';
import { DrainingRequestService } from '../../../../shared/services/drainingRequest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DrainingService } from '../../../../shared/services/draining.service';
import { MatDialog } from '@angular/material';
import { Slot } from '../../../../shared/models/slot';
import { User } from '../../../../shared/models/user';
import { DrainingFormComponent } from '../../../forms/draining-form/draining-form.component';
import { Home } from '../../../../shared/models/home';

@Component({
  selector: 'app-view-vidangeur',
  templateUrl: './view-vidangeur.component.html',
  styleUrls: ['./view-vidangeur.component.scss']
})
export class ViewVidangeurComponent implements OnInit {
  @Input() currentUser: User;

  slotData: Slot[];
  accepteDrainingForm: FormGroup;
  accepteDrainingArray: any[] = [];
  allDrainingRequestUnchecked: any[] = [];
  allDrainingAccepted: any[] = [];
  allDrainingDone: any[] = [];


  constructor(private drainingRequestService: DrainingRequestService, private drainingService: DrainingService,
              private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {

   this.drainingRequestService.getAllDrainingRequestUnchecked().subscribe( data => {
    this.allDrainingRequestUnchecked = data;

    this.accepteDrainingForm = this.fb.group({
     draining_id: ['', Validators.required],
     accepted: ['1'] });
   });

   this.drainingService.getDrainingAccepted(this.currentUser.id).subscribe( data => {this.allDrainingAccepted = data; });

   this.drainingService.getAllDraining(this.currentUser.id).subscribe( data => {
     console.log(data);

     this.allDrainingDone = data; });
  }

  openDetailsCustomer(home: Home) {
    return home.show = !home.show;
  }

  acceptRequest(accepted: any) {
    for ( const [i, request] of this.allDrainingRequestUnchecked.entries()) {
      for (const draining of request) {
        if ( draining.id === accepted.draining_id) {
          accepted.session_date = draining.session_date;
          accepted.user_id = draining.user_id;
          accepted.vidangeur_id = this.currentUser.id;

          this.allDrainingRequestUnchecked.splice(i, 1);
        }
      }
    }

    const userId = accepted.user_id;
    this.drainingRequestService.updateDrainingRequest(accepted).subscribe();
    this.drainingService.updateDrainingUser(userId).subscribe( () => {
      this.allDrainingAccepted.push(accepted);
    });
    this.allDrainingRequestUnchecked.filter( userDraining => {userDraining.filter((draining) => draining.status === 0); });
    window.location.reload();
  }

  openDialog(draining: any): void {

    const dialogRef = this.dialog.open(DrainingFormComponent, {
      width: '50%',
      height: '70%',
      disableClose: true,
      data: draining
    });

    dialogRef.afterClosed().subscribe( () => {
      window.location.reload();
    });
  }

}
