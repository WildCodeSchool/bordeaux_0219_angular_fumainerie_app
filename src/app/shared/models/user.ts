export class User {
  public id: number;
  public createAt?: string;
  public updateAt?: string;
  public deleteAt?: string;
  public firstname?: string;
  public lastname?: string;
  public birth_date?: string;
  public email?: string;
  public username?: string;
  public password?: string;
  public avatar?: string;
  public email_status?: boolean;
  public account_status?: number;
  public function?: string;

  constructor(input: User) {
    Object.assign(this, input);
  }
}
