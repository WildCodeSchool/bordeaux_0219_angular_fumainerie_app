import { Time } from '@angular/common';

export class Draining {
    public id?: number;
    // tslint:disable-next-line: variable-name
    public site_arrival_time?: string;
    // tslint:disable-next-line: variable-name
    public site_leave_time?: Time;
    public comments?: string;
    public weight?: number;
    // tslint:disable-next-line: variable-name
    public check_date?: Date;
    // tslint:disable-next-line: variable-name
    public sawdust_delivery?: number;
    // tslint:disable-next-line: variable-name
    public sawdust_weight?: number;
    // tslint:disable-next-line: variable-name
    public home_id?: number;
    // tslint:disable-next-line: variable-name
    public user_id?: number;
    public createAt?: string;
    public deleteAt?: string;
    // tslint:disable-next-line: variable-name
    public valid_account?: string;
    public show = false;

    constructor(input?: Draining) {
      if (!input) {
        Object.assign(this, input);
      }
    }
}
