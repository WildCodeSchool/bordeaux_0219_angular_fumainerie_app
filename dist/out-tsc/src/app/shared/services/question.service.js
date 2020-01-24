var QuestionService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let QuestionService = QuestionService_1 = class QuestionService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    getAllquestion() {
        return this.http.get(QuestionService_1.URL);
    }
    createQuestion(question) {
        question.traited = false;
        question.user_id = this.userService.user.id;
        console.log(question);
        return this.http.post(QuestionService_1.URL, question);
    }
    modifyQuestion(question) {
        return this.http.put(QuestionService_1.URL + `/${question.id}`, question);
    }
    deleteQuestion(id) {
        console.log('delete id: ' + id);
        return this.http.delete(QuestionService_1.URL + `/${id}`);
    }
};
QuestionService.URL = 'http://localhost:3000/question';
QuestionService = QuestionService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], QuestionService);
export { QuestionService };
//# sourceMappingURL=question.service.js.map