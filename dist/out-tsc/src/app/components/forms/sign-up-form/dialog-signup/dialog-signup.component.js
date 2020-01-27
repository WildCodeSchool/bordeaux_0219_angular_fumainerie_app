import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DialogSignupComponent = class DialogSignupComponent {
    constructor(router, dialogRef) {
        this.router = router;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    onClose() {
        this.router.navigate(['/accueil']);
        this.dialogRef.close();
    }
};
DialogSignupComponent = __decorate([
    Component({
        selector: 'app-dialog-signup',
        templateUrl: './dialog-signup.component.html',
        styleUrls: ['./dialog-signup.component.scss']
    })
], DialogSignupComponent);
export { DialogSignupComponent };
//# sourceMappingURL=dialog-signup.component.js.map