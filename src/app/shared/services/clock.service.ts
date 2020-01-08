import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() {
  }
  getStart() {
    const start = new Date('Feb 10, 2020 08:00:00').getTime();
    const now = new Date().getTime();
    const begin = start - now;
    console.log(begin);
    return begin;

  }
}
