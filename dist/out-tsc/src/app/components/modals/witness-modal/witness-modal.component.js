import { __decorate } from "tslib";
import { Component } from '@angular/core';
let WitnessModalComponent = class WitnessModalComponent {
    constructor(router, dialogRef) {
        this.router = router;
        this.dialogRef = dialogRef;
    }
    onClose() {
        this.router.navigate(['dashboard/communication/avis']);
        this.dialogRef.close();
    }
};
WitnessModalComponent = __decorate([
    Component({
        selector: 'app-witness-modal',
        templateUrl: './witness-modal.component.html',
        styleUrls: ['./witness-modal.component.scss']
    })
], WitnessModalComponent);
export { WitnessModalComponent };
//# sourceMappingURL=witness-modal.component.js.map