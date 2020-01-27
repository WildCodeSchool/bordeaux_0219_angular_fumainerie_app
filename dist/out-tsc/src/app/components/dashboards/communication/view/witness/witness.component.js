import { __decorate } from "tslib";
import { WitnessDeleteModalComponent } from './../../../../modals/witness-delete-modal/witness-delete-modal.component';
import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';
let WitnessComponent = class WitnessComponent {
    constructor(witnessService, dialog, userService) {
        this.witnessService = witnessService;
        this.dialog = dialog;
        this.userService = userService;
        this.status = new FormControl();
    }
    ngOnInit() {
        this.user = this.userService.user;
        if (this.user.function === 'admin') {
            this.witnessService.getAllWitness().subscribe((witness) => {
                this.witness = witness;
            });
        }
        else {
            this.witnessService.getValidedWitness().subscribe((witness) => {
                this.witness = witness;
            });
        }
    }
    onChange(toggle, index) {
        this.witness[index].status = toggle.checked;
        this.witnessService.modifyWitness(this.witness[index]).subscribe();
    }
    onAskDeleteWitness(index, i) {
        const dialogRef = this.dialog.open(WitnessDeleteModalComponent, {
            width: '50%'
        });
        const instance = dialogRef.componentInstance;
        instance.index = index;
        dialogRef.afterClosed().subscribe(isDeleted => {
            if (isDeleted) {
                this.witness.splice(i, 1);
            }
        });
    }
};
__decorate([
    Input()
], WitnessComponent.prototype, "checked", void 0);
WitnessComponent = __decorate([
    Component({
        selector: 'app-witness',
        templateUrl: './witness.component.html',
        styleUrls: ['./witness.component.scss']
    })
], WitnessComponent);
export { WitnessComponent };
//# sourceMappingURL=witness.component.js.map