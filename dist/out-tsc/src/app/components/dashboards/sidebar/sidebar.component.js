import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SidebarComponent = class SidebarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    clickedLogo() {
        this.router.navigate(['/dashboard']);
    }
};
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map