import { __decorate } from "tslib";
import { gouvernanceMock } from './../../shared/gouvernance-mock';
import { Component } from '@angular/core';
let CarouselComponent = class CarouselComponent {
    constructor() {
        this.users = gouvernanceMock;
    }
    ngOnInit() {
    }
};
CarouselComponent = __decorate([
    Component({
        selector: 'app-carousel',
        templateUrl: './carousel.component.html',
        styleUrls: ['./carousel.component.scss']
    })
], CarouselComponent);
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map