export class User {
  public id: number;
  public createAt?: string;
  public updateAt?: string;
  public deleteAt?: string;
  public firstname?: string;
  public lastname?: string;
  public birthDate?: string;
  public phone?: string;
  public email?: string;
  public username?: string;
  public password?: string;
  public avatar?: string;
  public status?: number;
  public fonction?: string;

  constructor(input: User) {
    Object.assign(this, input);
  }
}
