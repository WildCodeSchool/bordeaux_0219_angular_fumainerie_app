import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let FormValidationComponent = class FormValidationComponent {
    constructor(formbuilder, userService, router, dialog) {
        this.formbuilder = formbuilder;
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.user = this.userService.user;
        this.validationHomeForm = this.formbuilder.group({
            type: ['', [Validators.required]],
            address: ['', [Validators.required]],
            address_plus: ['', [Validators.required]],
            zip: ['', [Validators.required]],
            city: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            adult_nbr: ['', [Validators.required]],
            child_nbr: ['', [Validators.required]]
        });
    }
    completeHome() {
        return this.userService.postHomeForm(this.validationHomeForm.value, this.user).subscribe(() => {
            this.router.navigate(['/dashboard']);
        });
    }
};
FormValidationComponent = __decorate([
    Component({
        selector: 'app-form-validation',
        templateUrl: './form-validation.component.html',
        styleUrls: ['./form-validation.component.scss']
    })
], FormValidationComponent);
export { FormValidationComponent };
//# sourceMappingURL=form-validation.component.js.map