import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ClockService = class ClockService {
    constructor() {
    }
    getStart() {
        const start = new Date('Feb 10, 2020 08:00:00').getTime();
        const now = new Date().getTime();
        const begin = start - now;
        console.log(begin);
        return begin;
    }
};
ClockService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ClockService);
export { ClockService };
//# sourceMappingURL=clock.service.js.map