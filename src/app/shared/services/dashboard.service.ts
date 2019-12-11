import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }  // insérer service HTTP

  static URL = '';
  static URL_GET_ACCOUNT_STATUS = '';
  user: User;

  getAccountStatus(status: boolean) {
    //  return this.http.get(DashboardService.URL_GET_ACCOUNT_STATUS + '/' + id);

  }
}
