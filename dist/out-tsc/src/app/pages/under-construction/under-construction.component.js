import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UnderConstructionComponent = class UnderConstructionComponent {
    constructor() {
        this.mail = false;
        this.phone = false;
    }
    displayFacebook() {
        this.mail = false;
        this.phone = false;
    }
    displayPhone() {
        this.phone = !this.phone;
        this.mail = false;
    }
    displayMail() {
        this.mail = !this.mail;
        this.phone = false;
    }
    ngOnInit() {
    }
};
UnderConstructionComponent = __decorate([
    Component({
        selector: 'app-under-construction',
        templateUrl: './under-construction.component.html',
        styleUrls: ['./under-construction.component.scss']
    })
], UnderConstructionComponent);
export { UnderConstructionComponent };
//# sourceMappingURL=under-construction.component.js.map