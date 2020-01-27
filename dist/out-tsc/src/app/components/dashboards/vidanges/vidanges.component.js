import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { DrainingRequest } from 'src/app/shared/models/drainingRequest';
let VidangesComponent = class VidangesComponent {
    // tslint:disable-next-line: max-line-length
    constructor(drainingRequestService, userService, drainingService, fb, dateAdapter) {
        this.drainingRequestService = drainingRequestService;
        this.userService = userService;
        this.drainingService = drainingService;
        this.fb = fb;
        this.dateAdapter = dateAdapter;
        this.allDrainingRequestByUser = [];
        this.allDraining = [];
        this.dateAdapter.setLocale('fr');
    }
    ngOnInit() {
        this.currentUser = this.userService.user;
        this.drainingRequestService.getAllDrainingRequestByUser(this.currentUser.id).subscribe((data2) => {
            this.allDrainingRequestByUser = data2;
        });
        this.drainingService.getDrainingByUserId(this.currentUser.id).subscribe(drainings => {
            this.allDraining = drainings;
        });
        this.drainingService.getNextDrainingByUserId(this.currentUser.id).subscribe(draining => {
            this.nextDraining = draining;
        });
        this.drainingRequestService.getSlot().subscribe(data => {
            this.slotData = data;
            this.drainingFormRequest = this.fb.group({
                date: ['', Validators.required],
                slots: ['', Validators.required]
            });
        });
    }
    // Show detail when click on details
    openDetailsDraining(drainingDetail) {
        drainingDetail.show = !drainingDetail.show;
        return drainingDetail;
    }
    // Send a draining request
    onSubmit(drainingRequest) {
        // Convert date
        const dateString = drainingRequest.date.toLocaleDateString().split('/').reverse().join('-');
        const draining = new DrainingRequest();
        draining.user_id = this.currentUser.id;
        draining.session_date = dateString;
        draining.slot_id = drainingRequest.slots;
        // Print new drainong request on the front
        const fakedraining = new DrainingRequest();
        fakedraining.user_id = this.currentUser.id;
        fakedraining.session_date = dateString;
        fakedraining.slot_id = drainingRequest.slots;
        this.slotData.forEach(element => {
            if (fakedraining.slot_id === element.id) {
                fakedraining.name = element.name;
            }
        });
        this.allDrainingRequestByUser.push(fakedraining);
        return this.drainingRequestService.postDrainingRequest(draining).subscribe();
    }
    // Send a emergency draining request
    sendEmergency() {
        // Convert date.
        const currentDateString = new Date().toLocaleDateString().split('/').reverse().join('-');
        // Create a new draining request.
        const drainingRequestEmergency = new DrainingRequest();
        drainingRequestEmergency.user_id = this.currentUser.id;
        drainingRequestEmergency.session_date = currentDateString;
        drainingRequestEmergency.slot_id = 1;
        // Print new drainong request on the front
        const fakedraining = new DrainingRequest();
        fakedraining.user_id = this.currentUser.id;
        fakedraining.session_date = currentDateString;
        fakedraining.slot_id = 1;
        this.slotData.forEach(element => {
            if (fakedraining.slot_id === element.id) {
                fakedraining.name = element.name;
            }
        });
        this.allDrainingRequestByUser.push(fakedraining);
        return this.drainingRequestService.postDrainingRequest(drainingRequestEmergency).subscribe();
    }
};
VidangesComponent = __decorate([
    Component({
        selector: 'app-vidanges',
        templateUrl: './vidanges.component.html',
        styleUrls: ['./vidanges.component.scss']
    })
], VidangesComponent);
export { VidangesComponent };
//# sourceMappingURL=vidanges.component.js.map