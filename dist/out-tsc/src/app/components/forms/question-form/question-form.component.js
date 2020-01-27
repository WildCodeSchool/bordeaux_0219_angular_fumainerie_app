import { __decorate } from "tslib";
import { QuestionModalComponent } from '../../modals/question-modal/question-modal.component';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let QuestionFormComponent = class QuestionFormComponent {
    constructor(questionService, router, formbuilder, dialog) {
        this.questionService = questionService;
        this.router = router;
        this.formbuilder = formbuilder;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.questionForm = this.formbuilder.group({
            topic: ['', Validators.required],
            question: ['', Validators.required]
        });
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
};
QuestionFormComponent = __decorate([
    Component({
        selector: 'app-question-form',
        templateUrl: './question-form.component.html',
        styleUrls: ['./question-form.component.scss']
    })
], QuestionFormComponent);
export { QuestionFormComponent };
//# sourceMappingURL=question-form.component.js.map