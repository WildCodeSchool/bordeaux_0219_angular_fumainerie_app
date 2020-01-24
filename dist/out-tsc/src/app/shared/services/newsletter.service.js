var NewsletterService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let NewsletterService = NewsletterService_1 = class NewsletterService {
    constructor(http) {
        this.http = http;
    }
    addEmail(newsletter) {
        return this.http.post(NewsletterService_1.URL, newsletter);
    }
};
NewsletterService.URL = 'http://localhost:3000/newsletter';
NewsletterService = NewsletterService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NewsletterService);
export { NewsletterService };
//# sourceMappingURL=newsletter.service.js.map