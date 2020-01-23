import { __decorate } from "tslib";
import { Component } from '@angular/core';
let QuestionModalComponent = class QuestionModalComponent {
    constructor(router, dialogRef) {
        this.router = router;
        this.dialogRef = dialogRef;
    }
    onClose() {
        this.router.navigate(['dashboard/communication/avis']);
        this.dialogRef.close();
    }
};
QuestionModalComponent = __decorate([
    Component({
        selector: 'app-question-modal',
        templateUrl: './question-modal.component.html',
        styleUrls: ['./question-modal.component.scss']
    })
], QuestionModalComponent);
export { QuestionModalComponent };
//# sourceMappingURL=question-modal.component.js.map