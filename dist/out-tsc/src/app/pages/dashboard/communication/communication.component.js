import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CommunicationComponent = class CommunicationComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.user = this.userService.user;
    }
};
CommunicationComponent = __decorate([
    Component({
        selector: 'app-communication',
        templateUrl: './communication.component.html',
        styleUrls: ['./communication.component.scss']
    })
], CommunicationComponent);
export { CommunicationComponent };
//# sourceMappingURL=communication.component.js.map