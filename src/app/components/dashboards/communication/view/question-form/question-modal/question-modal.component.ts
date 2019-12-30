import { WitnessModalComponent } from './../../witness-form/witness-modal/witness-modal.component';
import { WitnessService } from './../../../../../../shared/services/witness.service';
import { MatDialogRef } from '@angular/material';
import { Component} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.scss']
})
export class QuestionModalComponent {

  constructor(private router: Router,
              private dialogRef: MatDialogRef<QuestionModalComponent>,
              private witnessService: WitnessService) {}
  onClose() {
    this.router.navigate(['dashboard/communication/avis']);
    this.dialogRef.close();
    this.witnessService.hideWitnessListOnMobile();
  }
}
