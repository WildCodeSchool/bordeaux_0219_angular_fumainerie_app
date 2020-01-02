export class Event {

  public id!: number;
  public createAt!: string;
  public updateAt!: string;
  public deleteAt!: string;
  public author!: number;
  public title!: string;
  public date!: date;
  public description!: string;
  public user_id!: number;
  public username!: string;

  constructor(input: Event) {
      Object.assign(this, input);
  }
}
