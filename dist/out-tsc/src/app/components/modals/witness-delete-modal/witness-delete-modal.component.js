import { __decorate } from "tslib";
import { Component } from '@angular/core';
let WitnessDeleteModalComponent = class WitnessDeleteModalComponent {
    constructor(dialogRef, witnessService) {
        this.dialogRef = dialogRef;
        this.witnessService = witnessService;
    }
    ngOnInit() {
    }
    onClose() {
        this.dialogRef.close();
    }
    onDelete() {
        this.witnessService.deleteWitness(this.index).subscribe(() => {
            this.dialogRef.close(true);
        });
    }
};
WitnessDeleteModalComponent = __decorate([
    Component({
        selector: 'app-witness-delete-modal',
        templateUrl: './witness-delete-modal.component.html',
        styleUrls: ['./witness-delete-modal.component.scss']
    })
], WitnessDeleteModalComponent);
export { WitnessDeleteModalComponent };
//# sourceMappingURL=witness-delete-modal.component.js.map