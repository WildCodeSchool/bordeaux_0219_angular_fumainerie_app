import { __decorate } from "tslib";
import { NewsModalComponent } from './../../modals/news-modal/news-modal.component';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let NewsFormComponent = class NewsFormComponent {
    constructor(router, newsService, formbuilder, dialog) {
        this.router = router;
        this.newsService = newsService;
        this.formbuilder = formbuilder;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.newsForm = this.formbuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            link: ['', Validators.required],
        });
    }
    resetForm() {
        this.newsForm.reset();
    }
    onClose() {
        this.router.navigate(['/dashboard/actualites']);
    }
    onSubmitNewsForm() {
        this.newsService.createNews(this.newsForm.value).subscribe();
        const dialogRef = this.dialog.open(NewsModalComponent, {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.router.navigate(['/dashboard/actualites']);
            }
        });
    }
};
NewsFormComponent = __decorate([
    Component({
        selector: 'app-news-form',
        templateUrl: './news-form.component.html',
        styleUrls: ['./news-form.component.scss']
    })
], NewsFormComponent);
export { NewsFormComponent };
//# sourceMappingURL=news-form.component.js.map