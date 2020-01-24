var EventService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let EventService = EventService_1 = class EventService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.button = true;
        this.onEventForm = false;
    }
    getAllEvents() {
        return this.http.get(EventService_1.URL + '/date');
    }
    createEvents(event) {
        console.log(event);
        event.user_id = this.userService.user.id;
        return this.http.post(EventService_1.URL, event);
    }
    deleteEvent() {
        console.log('delete id: ' + this.index);
        return this.http.delete(EventService_1.URL + `/${this.index}`);
    }
};
EventService.URL = 'http://localhost:3000/event';
EventService = EventService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EventService);
export { EventService };
//# sourceMappingURL=event.service.js.map