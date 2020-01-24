var DrainingService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let DrainingService = DrainingService_1 = class DrainingService {
    constructor(http) {
        this.http = http;
    }
    getDrainingByUserId(id) {
        return this.http.get(DrainingService_1.URL + 'draining/user/' + id);
    }
    getNextDrainingByUserId(id) {
        return this.http.get(DrainingService_1.URL + 'draining/user/' + id + '/next');
    }
};
DrainingService.URL = 'http://localhost:3000/';
DrainingService = DrainingService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DrainingService);
export { DrainingService };
//# sourceMappingURL=draining.service.js.map