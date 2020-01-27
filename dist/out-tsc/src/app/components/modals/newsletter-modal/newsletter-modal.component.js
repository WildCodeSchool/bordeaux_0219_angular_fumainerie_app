import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NewsletterModalComponent = class NewsletterModalComponent {
    constructor(router, dialogRef) {
        this.router = router;
        this.dialogRef = dialogRef;
    }
    onClose() {
        this.router.navigate(['/']);
        this.dialogRef.close();
    }
};
NewsletterModalComponent = __decorate([
    Component({
        selector: 'app-newsletter-modal',
        templateUrl: './newsletter-modal.component.html',
        styleUrls: ['./newsletter-modal.component.scss']
    })
], NewsletterModalComponent);
export { NewsletterModalComponent };
//# sourceMappingURL=newsletter-modal.component.js.map