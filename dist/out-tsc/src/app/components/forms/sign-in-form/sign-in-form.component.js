import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
let SignInFormComponent = class SignInFormComponent {
    constructor(router, formbuilder, userService) {
        this.router = router;
        this.formbuilder = formbuilder;
        this.userService = userService;
    }
    ngOnInit() {
        this.signInForm = this.formbuilder.group({
            email: ['', [Validators.required, emailValidator]],
            password: ['', [Validators.required]]
        });
    }
    userConnexion() {
        this.userService.connexion(this.signInForm.value).subscribe(() => {
            this.router.navigate(['/dashboard']);
        });
    }
    goToSignUp() {
        this.router.navigate(['/inscription']);
    }
};
SignInFormComponent = __decorate([
    Component({
        selector: 'app-sign-in-form',
        templateUrl: './sign-in-form.component.html',
        styleUrls: ['./sign-in-form.component.scss']
    })
], SignInFormComponent);
export { SignInFormComponent };
//# sourceMappingURL=sign-in-form.component.js.map