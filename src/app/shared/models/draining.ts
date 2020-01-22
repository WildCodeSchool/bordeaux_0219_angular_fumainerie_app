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
    public session_date?: Date;
    // tslint:disable-next-line: variable-name
    public sawdust_delivery?: number;
    // tslint:disable-next-line: variable-name
    public sawdust_weight?: number;
    // tslint:disable-next-line: variable-name
    public home_id?: number;
    // tslint:disable-next-line: variable-name
    public user_id?: number;
    public createAt?: Date;
    public deleteAt?: string;
    public show = false;
    // tslint:disable-next-line: variable-name
    public slot_id: number;
    public status?: number;
    // tslint:disable-next-line: variable-name
    public vidangeur_id?: number;

    constructor(input?: Draining) {
      if (input) {
        Object.assign(this, input);
      }
    }
}

