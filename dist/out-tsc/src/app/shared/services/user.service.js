var UserService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
let UserService = UserService_1 = class UserService {
    constructor(http) {
        this.http = http;
    }
    getMe() {
        return this.http.get(UserService_1.URL + '/user/me').pipe(tap((user) => {
            this.user = user;
        }));
    }
    isLogged() {
        return this.getMe().pipe(map((user) => {
            return (user != null);
        }));
    }
    postUpdateUserForm(user, id) {
        return this.http.put(UserService_1.URL + `/user/${id}`, user);
    }
    postHomeForm(home, user) {
        return this.http.post(UserService_1.URL + '/home/update', [home, user]);
    }
    connexion(user) {
        return this.http.post(UserService_1.URL_AUTH + '/signin', user, { observe: 'response' }).pipe(tap((response) => {
            const token = response.headers.get('JWT-TOKEN');
            localStorage.setItem('JWT-TOKEN', token);
            this.user = response.body;
            return response.body;
        }));
    }
};
UserService.URL = 'http://localhost:3000';
UserService.URL_AUTH = 'http://localhost:3000/auth';
UserService = UserService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map