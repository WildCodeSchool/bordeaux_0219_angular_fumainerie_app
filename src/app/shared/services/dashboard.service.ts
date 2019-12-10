import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }  // insérer service HTTP

  static URL_GET_ACCOUNT_STATUS = '';


  getAccountStatus(status: boolean) {
    // return status = this.http.get(URL_GET_ACCOUNT_STATUS) recupérer le status de l'account
    return status = false;
  }
}
