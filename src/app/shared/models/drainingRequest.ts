import { User } from './user';

export class DrainingRequest {
  // tslint:disable-next-line: variable-name
  public session_date: string;
  // tslint:disable-next-line: variable-name
  public slot_id: number;
  // tslint:disable-next-line: variable-name
  public user_id: number;
  public createAt?: Date;
  public deleteAt?: string;
  public status?: string;
  public name?: string;
  public startAt?: string;
  public endAt?: string;
  public show: boolean;
  public accepted?: number;
  public emergency?: number;
  // tslint:disable-next-line: variable-name
  public draining_id: number;
  public user?: User;


  constructor(input?: DrainingRequest) {
    if (input) {
      Object.assign(this, input);
      this.createAt = new Date(input.createAt);
    }
  }
}
