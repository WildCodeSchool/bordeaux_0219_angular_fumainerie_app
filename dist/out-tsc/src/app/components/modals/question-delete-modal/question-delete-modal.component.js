import { __decorate } from "tslib";
import { Component } from '@angular/core';
let QuestionDeleteModalComponent = class QuestionDeleteModalComponent {
    constructor(questionService, dialogRef) {
        this.questionService = questionService;
        this.dialogRef = dialogRef;
    }
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
};
QuestionDeleteModalComponent = __decorate([
    Component({
        selector: 'app-question-delete-modal',
        templateUrl: './question-delete-modal.component.html',
        styleUrls: ['./question-delete-modal.component.scss']
    })
], QuestionDeleteModalComponent);
export { QuestionDeleteModalComponent };
//# sourceMappingURL=question-delete-modal.component.js.map