import { __decorate } from "tslib";
import { EventModalFormComponent } from '../../modals/event-modal-form/event-modal-form.component';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let EventsFormComponent = class EventsFormComponent {
    constructor(router, eventService, formbuilder, dialog) {
        this.router = router;
        this.eventService = eventService;
        this.formbuilder = formbuilder;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.eventForm = this.formbuilder.group({
            date: ['', Validators.required],
            time: ['', Validators.required],
            description: ['', Validators.required],
            author: '',
        });
    }
    resetForm() {
        this.eventForm.reset();
    }
    onClose() {
        this.router.navigate(['/dashboard/evenements']);
    }
    onSubmitEventForm() {
        console.log('modale ouverte?');
        console.log(this.eventForm.value);
        this.eventForm.value.date = this.eventForm.value.date.toLocaleDateString().split('/').reverse().join('-');
        this.eventForm.value.time = this.eventForm.value.time + ':00';
        if (this.eventForm.value.author === '') {
            this.eventForm.value.author = 'La Collégiale';
        }
        this.eventService.createEvents(this.eventForm.value).subscribe();
        const dialogRef = this.dialog.open(EventModalFormComponent, {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.router.navigate(['/dashboard/evenements']);
            }
        });
    }
};
EventsFormComponent = __decorate([
    Component({
        selector: 'app-events-form',
        templateUrl: './events-form.component.html',
        styleUrls: ['./events-form.component.scss']
    })
], EventsFormComponent);
export { EventsFormComponent };
//# sourceMappingURL=events-form.component.js.map