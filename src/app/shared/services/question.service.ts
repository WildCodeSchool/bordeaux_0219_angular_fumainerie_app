import { Question } from './../models/question';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  static URL = 'http://localhost:3000/questions';
  constructor(private http: HttpClient, ) { }

  public getAllquestion(): Observable<Question[]> {
    return this.http.get<Question[]>(QuestionService.URL);
  }

  public createQuestion(question: Question): Observable<any> {
    question.traited = false;
    question.user_id = 0;
    console.log(question);
    return this.http.post(QuestionService.URL, question);
  }


}

