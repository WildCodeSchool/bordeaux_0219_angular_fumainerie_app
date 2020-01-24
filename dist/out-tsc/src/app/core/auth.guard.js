import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let AuthGuard = class AuthGuard {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    canActivate(next, state) {
        // check si user déja récupéré, sinon > connecter
        return true; // put down this ligne under the if function for activate the authentification  🤨
        if (this.service.user) {
        }
        return this.service.isLogged().pipe(catchError(err => {
            this.router.navigate(['/connexion']);
            return throwError(err);
        }));
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map