import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BienvenuComponent = class BienvenuComponent {
    constructor(witnessService, newsService) {
        this.witnessService = witnessService;
        this.newsService = newsService;
    }
    ngOnInit() {
        this.witnessService.getAllWitness().subscribe((witness) => {
            this.witness = witness;
        });
        this.newsService.getAllNews().subscribe((news) => {
            this.news = news;
        });
    }
};
BienvenuComponent = __decorate([
    Component({
        selector: 'app-bienvenu',
        templateUrl: './bienvenu.component.html',
        styleUrls: ['./bienvenu.component.scss'],
    })
], BienvenuComponent);
export { BienvenuComponent };
//# sourceMappingURL=bienvenu.component.js.map