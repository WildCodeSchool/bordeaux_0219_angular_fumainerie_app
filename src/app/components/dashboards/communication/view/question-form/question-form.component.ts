import { Question } from './../../../../../shared/models/question';
import { QuestionService } from './../../../../../shared/services/question.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  questionForm: FormGroup;

  constructor(private questionService: QuestionService,
              private router: Router,
              private formbuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.questionForm = this.formbuilder.group({
      topic: ['', Validators.required],
      question: ['', Validators.required], });
  }
  resetForm() {
    this.questionForm.reset();
  }
  onClose() {
      this.router.navigate(['dashboard/communication/avis']);
  }
  onSubmitQuestionForm() {
    console.log(this.questionForm.value());
  }
}
/* this.route.paramMap.subscribe((params: ParamMap) => {
                this.newTicket.id = parseInt(params.get('id'));
                this.ticketService.getById(this.newTicket.id).subscribe(ticket => {
        this.newTicket = ticket;
        if (this.newTicket.group) {
          this.ticketType = 'CURSUS';
        } else {
          this.ticketType = 'SCHOOL';
        }
      });
    });
this.ticketService.formButton = false;
  }


onFormSubmit(newTicket: Ticket); {
    if (this.ticketType === 'CURSUS') {
      this.newTicket.group = { id: 178 } as Group;
      this.newTicket.school = null;
    } else {
      this.newTicket.school = { id: 5 };
      this.newTicket.group = null;
    }
    this.ticketService.createTicket(this.newTicket).subscribe(() => {
      this.router.navigate(['/user']);
    });
  }
} */
