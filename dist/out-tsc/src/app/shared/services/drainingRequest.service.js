var DrainingRequestService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let DrainingRequestService = DrainingRequestService_1 = class DrainingRequestService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    postDrainingRequest(drainingRequest) {
        return this.http.post(DrainingRequestService_1.URL + 'drainingRequest/draining', drainingRequest);
    }
    getSlot() {
        return this.http.get(DrainingRequestService_1.URL + 'slot');
    }
    getAllDrainingRequestByUser(id) {
        return this.http.get(DrainingRequestService_1.URL + `drainingRequest/user/${id}`);
    }
};
DrainingRequestService.URL = 'http://localhost:3000/';
DrainingRequestService = DrainingRequestService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DrainingRequestService);
export { DrainingRequestService };
//# sourceMappingURL=drainingRequest.service.js.map