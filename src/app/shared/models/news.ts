export class News {

  public id!: number;
  public createAt!: string;
  public updateAt!: string;
  public deleteAt!: string;
  public type!: string;
  public title!: string;
  public status!: boolean;
  public description!: string;
  public link!: string;
  // tslint:disable-next-line: variable-name
  public user_id!: number;

  constructor(input: News) {
    Object.assign(this, input);
  }
}
