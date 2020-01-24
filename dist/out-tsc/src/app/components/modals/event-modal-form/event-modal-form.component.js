import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EventModalFormComponent = class EventModalFormComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    onClose() {
        this.dialogRef.close(true);
    }
};
EventModalFormComponent = __decorate([
    Component({
        selector: 'app-event-modal-form',
        templateUrl: './event-modal-form.component.html',
        styleUrls: ['./event-modal-form.component.scss']
    })
], EventModalFormComponent);
export { EventModalFormComponent };
//# sourceMappingURL=event-modal-form.component.js.map