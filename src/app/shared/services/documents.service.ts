import { environment } from './../../../environments/environment';
import { Document } from './../models/document';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }
static URL = environment.url + '/document';


update;

getDocumentsByWord(word: string): Observable<Document[]> {
  return this.http.get<Document[]>(DocumentsService.URL + `/recherche/${word}`);
}
getAllDocuments(): Observable<Document[]> {
  return this.http.get<Document[]>(DocumentsService.URL + '/accueil');
}

getValidedDocuments(): Observable<Document[]> {
  return this.http.get<Document[]>(DocumentsService.URL + `/validations`);
}

public deleteFile(id: number ): Observable<any> {
  console.log('delete id: ' + id);
  return this.http.delete<Document>(DocumentsService.URL + `/${id}`);
}

public getAll(): Observable<Document[]> {
  return this.http
  .get(DocumentsService.URL)
  .pipe(map(this.convertDateFromServerTodocuments));
}

private convertDateFromServerTodocuments(documents: any[]): Document[] {
  return documents.map(document => new document(document));
}

public getById(id: number): Observable<Document> {
  return this.http
  .get(DocumentsService.URL + '/' + id)
  .pipe(map((document: Document) => new Document(document)));
}

public create(fd: FormData): Observable<any> {
  return this.http
  .post(DocumentsService.URL + '/file' , fd);
}

modifyDocument(document: Document): Observable<any> {
  return this.http.put(DocumentsService.URL + `/${document.id}`, document);
}

public delete(id: number): Observable<any> {
  return this.http
  .delete(DocumentsService.URL + '/' + id);
}
}
