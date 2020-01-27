import { __decorate } from "tslib";
import { WitnessModalComponent } from '../../modals/witness-modal/witness-modal.component';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let WitnessFormComponent = class WitnessFormComponent {
    constructor(witnessService, router, formbuilder, dialog) {
        this.witnessService = witnessService;
        this.router = router;
        this.formbuilder = formbuilder;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.witnessForm = this.formbuilder.group({
            note: ['', Validators.required],
            title: ['', Validators.required],
            description: ['', Validators.required],
        });
    }
    resetForm() {
        this.witnessForm.reset();
    }
    onClose() {
        this.router.navigate(['dashboard/communication/avis']);
    }
    onSubmitWitnessForm() {
        console.log('modale ouverte?');
        console.log(this.witnessForm.value);
        this.witnessService.createWitness(this.witnessForm.value).subscribe();
        const dialogRef = this.dialog.open(WitnessModalComponent, {
            width: '50%'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
WitnessFormComponent = __decorate([
    Component({
        selector: 'app-witness-form',
        templateUrl: './witness-form.component.html',
        styleUrls: ['./witness-form.component.scss']
    })
], WitnessFormComponent);
export { WitnessFormComponent };
//# sourceMappingURL=witness-form.component.js.map