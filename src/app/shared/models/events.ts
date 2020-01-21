import { Time } from '@angular/common';
export class Event {

  public id!: number;
  public createAt!: string;
  public updateAt!: string;
  public deleteAt!: string;
  public author!: number;
  public title!: string;
  public date!: Date;
  public heure!: Time;
  public description!: string;
  // tslint:disable-next-line: variable-name
  public user_id!: number;
  public username!: string;

  constructor(input: Event) {
      Object.assign(this, input);
  }
}
