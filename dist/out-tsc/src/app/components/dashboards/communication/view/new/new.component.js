import { __decorate } from "tslib";
import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { NewsDeleteModalComponent } from '../../../../modals/news-delete-modal/news-delete-modal.component';
let NewComponent = class NewComponent {
    constructor(newsService, dialog, userService, router) {
        this.newsService = newsService;
        this.dialog = dialog;
        this.userService = userService;
        this.router = router;
        this.status = new FormControl();
    }
    ngOnInit() {
        this.user = this.userService.user;
        if (this.user.function === 'admin') {
            this.newsService.getAllNews().subscribe((news) => {
                this.news = news;
            });
        }
        else {
            this.newsService.getValidedNews().subscribe((news) => {
                this.news = news;
            });
        }
    }
    onNewsForm() {
        this.router.navigate(['dashboard/evenements;']);
    }
    onChange(toggle, index) {
        this.news[index].status = toggle.checked;
        this.newsService.modifyNews(this.news[index]).subscribe();
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
};
__decorate([
    Input()
], NewComponent.prototype, "checked", void 0);
NewComponent = __decorate([
    Component({
        selector: 'app-new',
        templateUrl: './new.component.html',
        styleUrls: ['./new.component.scss']
    })
], NewComponent);
export { NewComponent };
//# sourceMappingURL=new.component.js.map