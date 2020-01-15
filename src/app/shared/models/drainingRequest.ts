export class DrainingRequest {

  // tslint:disable-next-line: variable-name
  public session_date: string;
  // tslint:disable-next-line: variable-name
  public slot_id: number;
  // tslint:disable-next-line: variable-name
  public user_id: number;
  public createAt?: string;
  public deleteAt?: string;
  public status?: string;
  public name?: string;
  public startAt?: string;
  public endAt?: string;
  public show: boolean;

  constructor(input?: DrainingRequest) {
    if (!input) {
      Object.assign(this, input);
    }
  }
}
