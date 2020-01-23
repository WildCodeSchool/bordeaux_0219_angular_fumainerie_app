var SignupService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SignupService = SignupService_1 = class SignupService {
    constructor(http) {
        this.http = http;
    }
    postNewUser(user) {
        return this.http.post(SignupService_1.URL, user);
    }
};
SignupService.URL = 'http://localhost:3000/auth/signup';
SignupService = SignupService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SignupService);
export { SignupService };
//# sourceMappingURL=signup.service.js.map