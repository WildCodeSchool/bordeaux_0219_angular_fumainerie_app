export class Witness {

  public id!: number;
  public createAt!: string;
  public updateAt!: string;
  public deleteAt!: string;
  public note!: number;
  public status!: boolean;
  public description!: string;
  public user_id!: number;

  public firstname!: string;
  public lastname!: string;
  public birth_date!: string;
  public phone!: string;
  public email!: string;
  public username!: string;
  public password!: string;
  public avatar!: string;
  public account_status!: string;
  public function!: string;

  constructor(input: Witness) {
      Object.assign(this, input);
  }
}

