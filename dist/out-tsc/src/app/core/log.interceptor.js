import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LogInterceptor = class LogInterceptor {
    constructor(injector, userService) {
        this.injector = injector;
        this.userService = userService;
    }
    intercept(req, next) {
        const token = localStorage.getItem('JWT-TOKEN');
        if (!token) {
            return next.handle(req);
        }
        const headers = req.headers.set('Autorization', `Bearer ${token}`);
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
};
LogInterceptor = __decorate([
    Injectable()
], LogInterceptor);
export { LogInterceptor };
//# sourceMappingURL=log.interceptor.js.map