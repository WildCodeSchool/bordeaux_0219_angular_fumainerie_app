import { __decorate } from "tslib";
import { EventDeleteModalComponent } from './../../../components/modals/event-delete-modal/event-delete-modal.component';
import { Component } from '@angular/core';
let EventsComponent = class EventsComponent {
    constructor(eventService, userService, dialog, router) {
        this.eventService = eventService;
        this.userService = userService;
        this.dialog = dialog;
        this.router = router;
        this.button = true;
    }
    ngOnInit() {
        this.eventService.getAllEvents().subscribe((event) => {
            this.events = event;
        });
        this.user = this.userService.user;
    }
    onEventsForm() {
        this.router.navigate(['/dashboard/evenements/nouvel']);
    }
    onAskDeleteEvent(index, i) {
        this.eventService.index = index;
        const dialogRef = this.dialog.open(EventDeleteModalComponent, {
            width: '50%'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.events.splice(i, 1);
            }
        });
    }
};
EventsComponent = __decorate([
    Component({
        selector: 'app-events',
        templateUrl: './events.component.html',
        styleUrls: ['./events.component.scss']
    })
], EventsComponent);
export { EventsComponent };
//# sourceMappingURL=events.component.js.map