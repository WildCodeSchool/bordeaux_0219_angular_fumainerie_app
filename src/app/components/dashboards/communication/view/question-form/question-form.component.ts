import { WitnessService } from './../../../../../shared/services/witness.service';
import { QuestionModalComponent } from '../../../../modals/question-modal/question-modal.component';
import { QuestionService } from './../../../../../shared/services/question.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog} from '@angular/material';



@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  constructor(private questionService: QuestionService,
              private router: Router,
              private witnessService: WitnessService,
              private formbuilder: FormBuilder,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

 questionForm: FormGroup;
  ngOnInit() {
    this.questionForm = this.formbuilder.group({
      topic: ['', Validators.required],
      question: ['', Validators.required]});
  }
  resetForm() {
    this.questionForm.reset();
  }
  onClose() {
      this.router.navigate(['dashboard/communication/avis']);
  }
  onSubmitQuestionForm() {
    console.log('modale ouverte?');
    console.log(this.questionForm.value);
    this.questionService.createQuestion(this.questionForm.value).subscribe();
    const dialogRef = this.dialog.open(QuestionModalComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
