import { MatDialogRef } from '@angular/material';
import { QuestionService } from './../../../shared/services/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-delete-modal',
  templateUrl: './question-delete-modal.component.html',
  styleUrls: ['./question-delete-modal.component.scss']
})

export class QuestionDeleteModalComponent implements OnInit {
  index: number;
  constructor(
    private questionService: QuestionService,
    private dialogRef: MatDialogRef<QuestionDeleteModalComponent>,
    ) {}

    ngOnInit() {
    }

    onClose() {
      this.dialogRef.close();
    }

    onDelete() {
      this.questionService.deleteQuestion(this.index).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
