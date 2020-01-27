import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ButtonsComponent = class ButtonsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onWitnessForm() {
        this.router.navigate(['/dashboard/communication/avis/temoigner']);
    }
    onQuestionForm() {
        this.router.navigate(['/dashboard/communication/avis/question']);
    }
    onNewsForm() {
        this.router.navigate(['/dashboard/communication/avis/actualite']);
    }
};
ButtonsComponent = __decorate([
    Component({
        selector: 'app-buttons',
        templateUrl: './buttons.component.html',
        styleUrls: ['./buttons.component.scss']
    })
], ButtonsComponent);
export { ButtonsComponent };
//# sourceMappingURL=buttons.component.js.map