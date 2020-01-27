import { __decorate } from "tslib";
import { Component, Output, Input, EventEmitter } from '@angular/core';
let BurgerMenuComponent = class BurgerMenuComponent {
    constructor() {
        this.opened = new EventEmitter();
        this.active = false;
    }
    ngOnInit() {
        this.active = this.init || false;
    }
    onBurgerClicked() {
        this.active = !this.active;
        this.opened.emit();
    }
};
__decorate([
    Input()
], BurgerMenuComponent.prototype, "init", void 0);
__decorate([
    Output()
], BurgerMenuComponent.prototype, "opened", void 0);
BurgerMenuComponent = __decorate([
    Component({
        selector: 'app-burger-menu',
        templateUrl: './burger-menu.component.html',
        styleUrls: ['./burger-menu.component.scss']
    })
], BurgerMenuComponent);
export { BurgerMenuComponent };
//# sourceMappingURL=burger-menu.component.js.map