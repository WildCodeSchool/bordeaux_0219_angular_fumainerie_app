var NewsService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let NewsService = NewsService_1 = class NewsService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    getAllNews() {
        return this.http.get(NewsService_1.URL);
    }
    getValidedNews() {
        return this.http.get(NewsService_1.URL + `/valided`);
    }
    createNews(news) {
        news.status = false;
        news.user_id = this.userService.user.id;
        return this.http.post(NewsService_1.URL, news);
    }
    deleteNews(id) {
        console.log('delete id: ' + id);
        return this.http.delete(NewsService_1.URL + `/${id}`);
    }
    modifyNews(news) {
        return this.http.put(NewsService_1.URL + `/${news.id}`, news);
    }
};
NewsService.URL = 'http://localhost:3000/news';
NewsService = NewsService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NewsService);
export { NewsService };
//# sourceMappingURL=news.service.js.map