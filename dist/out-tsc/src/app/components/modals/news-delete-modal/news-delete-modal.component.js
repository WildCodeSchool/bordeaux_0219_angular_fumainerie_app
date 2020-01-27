import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NewsDeleteModalComponent = class NewsDeleteModalComponent {
    constructor(dialogRef, newsService) {
        this.dialogRef = dialogRef;
        this.newsService = newsService;
    }
    ngOnInit() {
    }
    onClose() {
        this.dialogRef.close();
    }
    onDelete() {
        this.newsService.deleteNews(this.index).subscribe();
        this.dialogRef.close(true);
    }
};
NewsDeleteModalComponent = __decorate([
    Component({
        selector: 'app-news-delete-modal',
        templateUrl: './news-delete-modal.component.html',
        styleUrls: ['./news-delete-modal.component.scss']
    })
], NewsDeleteModalComponent);
export { NewsDeleteModalComponent };
//# sourceMappingURL=news-delete-modal.component.js.map