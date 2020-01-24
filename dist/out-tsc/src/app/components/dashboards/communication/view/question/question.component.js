import { __decorate } from "tslib";
import { QuestionDeleteModalComponent } from './../../../../modals/question-delete-modal/question-delete-modal.component';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
let QuestionComponent = class QuestionComponent {
    constructor(questionService, dialog) {
        this.questionService = questionService;
        this.dialog = dialog;
        this.status = new FormControl();
    }
    ngOnInit() {
        this.questionService.getAllquestion().subscribe((questions) => {
            this.questions = questions;
        });
    }
    onChange(toggle, index) {
        this.questions[index].traited = toggle.checked;
        this.questionService.modifyQuestion(this.questions[index]).subscribe();
    }
    onAskDeleteQuestion(index, i) {
        const dialogRef = this.dialog.open(QuestionDeleteModalComponent, {
            width: '50%'
        });
        const instance = dialogRef.componentInstance;
        instance.index = index;
        dialogRef.afterClosed().subscribe(isDeleted => {
            if (isDeleted) {
                this.questions.splice(i, 1);
            }
        });
    }
};
__decorate([
    Input()
], QuestionComponent.prototype, "checked", void 0);
QuestionComponent = __decorate([
    Component({
        selector: 'app-question',
        templateUrl: './question.component.html',
        styleUrls: ['./question.component.scss']
    })
], QuestionComponent);
export { QuestionComponent };
//# sourceMappingURL=question.component.js.map