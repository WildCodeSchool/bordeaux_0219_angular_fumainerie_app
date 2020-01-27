import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NewsModalComponent = class NewsModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    onClose() {
        this.dialogRef.close(true);
    }
};
NewsModalComponent = __decorate([
    Component({
        selector: 'app-news-modal',
        templateUrl: './news-modal.component.html',
        styleUrls: ['./news-modal.component.scss']
    })
], NewsModalComponent);
export { NewsModalComponent };
//# sourceMappingURL=news-modal.component.js.map