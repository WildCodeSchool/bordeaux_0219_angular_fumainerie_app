import { QuestionDeleteModalComponent } from './../../../../modals/question-delete-modal/question-delete-modal.component';
import { QuestionService } from './../../../../../shared/services/question.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Question } from '../../../../../shared/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() checked: boolean;
  questions: Question [];
  status = new FormControl();
  constructor( private questionService: QuestionService,
               private dialog: MatDialog) { }

  ngOnInit() {
    this.questionService.getAllquestion().subscribe((questions) => {
      this.questions = questions; });
  }
  onChange(toggle, index: number) {
    this.questions[index].traited = toggle.checked;
    this.questionService.modifyQuestion(this.questions[index]).subscribe();
  }
  onAskDeleteQuestion(index: number, i: number) {
    const dialogRef = this.dialog.open(QuestionDeleteModalComponent, {
      width: '50%' });
    const instance = dialogRef.componentInstance;
    instance.index = index;

    dialogRef.afterClosed().subscribe(isDeleted => {
      if (isDeleted) {
        this.questions.splice(i, 1);
      }
    });
  }
}
