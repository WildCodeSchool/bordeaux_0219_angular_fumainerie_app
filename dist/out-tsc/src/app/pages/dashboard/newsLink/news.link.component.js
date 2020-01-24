import { __decorate } from "tslib";
import { NewsDeleteModalComponent } from '../../../components/modals/news-delete-modal/news-delete-modal.component';
import { Component, Input } from '@angular/core';
let NewsLinkComponent = class NewsLinkComponent {
    constructor(newsService, userService, dialog, router) {
        this.newsService = newsService;
        this.userService = userService;
        this.dialog = dialog;
        this.router = router;
        this.button = true;
    }
    ngOnInit() {
        this.newsService.getAllNews().subscribe((news) => {
            this.news = news;
        });
        this.user = this.userService.user;
    }
    onNewsForm() {
        this.router.navigate(['/dashboard/actualites/nouvelle']);
    }
    onAskDeleteNews(index, i) {
        const dialogRef = this.dialog.open(NewsDeleteModalComponent, {
            width: '50%'
        });
        const instance = dialogRef.componentInstance;
        instance.index = index;
        dialogRef.afterClosed().subscribe(isDeleted => {
            if (isDeleted) {
                this.news.splice(i, 1);
            }
        });
    }
    onChange(toggle, index) {
        this.news[index].status = toggle.checked;
        this.newsService.modifyNews(this.news[index]).subscribe();
    }
};
__decorate([
    Input()
], NewsLinkComponent.prototype, "checked", void 0);
NewsLinkComponent = __decorate([
    Component({
        selector: 'app-news-link',
        templateUrl: './news.link.component.html',
        styleUrls: ['./news.link.component.scss']
    })
], NewsLinkComponent);
export { NewsLinkComponent };
//# sourceMappingURL=news.link.component.js.map