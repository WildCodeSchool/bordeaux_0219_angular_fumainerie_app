var WitnessService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let WitnessService = WitnessService_1 = class WitnessService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    getAllWitness() {
        return this.http.get(WitnessService_1.URL);
    }
    getValidedWitness() {
        return this.http.get(WitnessService_1.URL + `/validations`);
    }
    createWitness(witness) {
        witness.status = false;
        witness.user_id = this.userService.user.id;
        return this.http.post(WitnessService_1.URL, witness);
    }
    modifyWitness(witness) {
        return this.http.put(WitnessService_1.URL + `/${witness.id}`, witness);
    }
    deleteWitness(id) {
        console.log('delete id: ' + id);
        return this.http.delete(WitnessService_1.URL + `/${id}`);
    }
};
WitnessService.URL = 'http://localhost:3000/witness';
WitnessService = WitnessService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], WitnessService);
export { WitnessService };
//# sourceMappingURL=witness.service.js.map