import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EventDeleteModalComponent = class EventDeleteModalComponent {
    constructor(dialogRef, eventService) {
        this.dialogRef = dialogRef;
        this.eventService = eventService;
    }
    ngOnInit() {
    }
    onClose() {
        this.dialogRef.close();
    }
    onDelete() {
        this.eventService.deleteEvent().subscribe();
        this.dialogRef.close(true);
    }
};
EventDeleteModalComponent = __decorate([
    Component({
        selector: 'app-event-delete-modal',
        templateUrl: './event-delete-modal.component.html',
        styleUrls: ['./event-delete-modal.component.scss']
    })
], EventDeleteModalComponent);
export { EventDeleteModalComponent };
//# sourceMappingURL=event-delete-modal.component.js.map