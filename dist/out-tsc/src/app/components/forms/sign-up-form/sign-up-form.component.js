import { __decorate } from "tslib";
import { DialogSignupComponent } from './dialog-signup/dialog-signup.component';
import { emailValidator } from '../../../../../src/app/shared/validators/email-validator';
import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
let SignUpFormComponent = class SignUpFormComponent {
    constructor(router, formbuilder, signupService, dialog) {
        this.router = router;
        this.formbuilder = formbuilder;
        this.signupService = signupService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.signUpForm = this.formbuilder.group({
            email: ['', [Validators.required, emailValidator]],
            password: ['', [Validators.required]],
            lastname: ['', Validators.required],
            firstname: ['', Validators.required],
            birth_date: ['', Validators.required]
        });
    }
    onSignUp() {
        this.signupService.postNewUser(this.signUpForm.value).subscribe();
        this.dialog.open(DialogSignupComponent, { width: '250px' });
    }
    goToSignIn() {
        this.router.navigate(['/connexion']);
    }
};
SignUpFormComponent = __decorate([
    Component({
        selector: 'app-sign-up-form',
        templateUrl: './sign-up-form.component.html',
        styleUrls: ['./sign-up-form.component.scss']
    })
], SignUpFormComponent);
export { SignUpFormComponent };
//# sourceMappingURL=sign-up-form.component.js.map