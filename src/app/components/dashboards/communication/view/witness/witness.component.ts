import { UserService } from './../../../../../shared/services/user.service';
import { WitnessDeleteModalComponent } from './../../../../modals/witness-delete-modal/witness-delete-modal.component';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Witness } from '../../../../../shared/models/witness';
import { WitnessService } from '../../../../../shared/services/witness.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../../shared/models/user';

@Component({
  selector: 'app-witness',
  templateUrl: './witness.component.html',
  styleUrls: ['./witness.component.scss']
})
export class WitnessComponent implements OnInit {
  @Input() checked: boolean;
  witness: Witness[];
  status = new FormControl();
  user: User;

  constructor(private witnessService: WitnessService,
              private dialog: MatDialog,
              private userService: UserService) { }

    ngOnInit() {
      this.user = this.userService.user;

      if (this.user.function === 'admin') {
        this.witnessService.getAllWitness().subscribe((witness) => {
          this.witness = witness;
        });
      } else {
        this.witnessService.getValidedWitness().subscribe((witness) => {
          this.witness = witness;
        });
      }
    }

    onChange(toggle, index: number) {
      this.witness[index].status = toggle.checked;
      this.witnessService.modifyWitness(this.witness[index]).subscribe();
    }

    onAskDeleteWitness(index: number, i: number) {
      const dialogRef = this.dialog.open(WitnessDeleteModalComponent, {
        width: '50%' });
      const instance = dialogRef.componentInstance;
      instance.index = index;

      dialogRef.afterClosed().subscribe(isDeleted => {
          if (isDeleted) {
            this.witness.splice(i, 1);
          }
        });
      }
    }
