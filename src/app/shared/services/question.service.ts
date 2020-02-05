import { environment } from './../../../environments/environment';
import { UserService } from './user.service';
import { Question } from './../models/question';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  static URL = environment.url + '/question';
  constructor(private http: HttpClient,
              private userService: UserService) { }

  public getAllquestion(): Observable<Question[]> {
    return this.http.get<Question[]>(QuestionService.URL);
  }

  public createQuestion(question: Question): Observable<any> {
    question.traited = false;
    question.user_id = this.userService.user.id;
    console.log(question);
    return this.http.post(QuestionService.URL, question);
  }
  public modifyQuestion(question: Question): Observable<any> {
    return this.http.put(QuestionService.URL + `/${question.id}`, {traited: question.traited});
  }

  public deleteQuestion(id: number ): Observable<any> {
    console.log('delete id: ' + id);
    return this.http.delete<Question>(QuestionService.URL + `/${id}`);
  }

}
