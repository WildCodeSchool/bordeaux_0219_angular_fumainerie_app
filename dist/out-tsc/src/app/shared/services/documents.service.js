var DocumentsService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let DocumentsService = DocumentsService_1 = class DocumentsService {
    constructor(http) {
        this.http = http;
    }
    getDocumentsByWord(word) {
        return this.http.get(DocumentsService_1.URL + `recherche/${word}`);
    }
    getAllDocuments() {
        return this.http.get(DocumentsService_1.URL);
    }
};
DocumentsService.URL = 'http://localhost:3000/document';
DocumentsService = DocumentsService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DocumentsService);
export { DocumentsService };
//# sourceMappingURL=documents.service.js.map