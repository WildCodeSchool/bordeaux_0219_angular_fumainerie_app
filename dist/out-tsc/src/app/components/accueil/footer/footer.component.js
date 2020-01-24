import { __decorate } from "tslib";
import { partnerList } from './partners-list-mock';
import { Component } from '@angular/core';
let FooterComponent = class FooterComponent {
    constructor() {
        this.partners = partnerList;
    }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.scss']
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map