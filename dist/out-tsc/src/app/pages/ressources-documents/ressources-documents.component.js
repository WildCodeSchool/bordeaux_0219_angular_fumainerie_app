import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RessourcesDocumentsComponent = class RessourcesDocumentsComponent {
    constructor(serviceDocument, userService, router) {
        this.serviceDocument = serviceDocument;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        if (this.userService.user !== undefined) {
            this.user = this.userService.user;
        }
        this.serviceDocument.getAllDocuments().subscribe((data) => {
            this.dataSearch = data;
        });
    }
    search(word) {
        this.serviceDocument.getDocumentsByWord(word).subscribe((data) => {
            this.dataSearch = data;
        });
    }
    onUploadForm() {
        this.router.navigate(['/dashboard/documents/ajouter']);
    }
};
RessourcesDocumentsComponent = __decorate([
    Component({
        selector: 'app-ressources-documents',
        templateUrl: './ressources-documents.component.html',
        styleUrls: ['./ressources-documents.component.scss']
    })
], RessourcesDocumentsComponent);
export { RessourcesDocumentsComponent };
//# sourceMappingURL=ressources-documents.component.js.map