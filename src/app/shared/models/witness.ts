export class Witness {

  public id!: number;
  public createAt!: string;
  public updateAt!: string;
  public deleteAt!: string;
  public note!: number;
  public title!: string;
  public valided!: boolean;
  public description!: string;
  public user_id!: number;
  public username!: string;
  public avatar!: string;
  public function!: string;

  constructor(input: Witness) {
      Object.assign(this, input);
  }
}

