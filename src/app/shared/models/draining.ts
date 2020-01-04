export class Draining {
  public session_date: string;
  public slot_id: string;
  public user_id: number;
  public createAt?: string;
  public deleteAt?: string;
  public status?: string;

  constructor(input?: Draining) {
    if (!input) {
      Object.assign(this, input);
    }
  }
}
