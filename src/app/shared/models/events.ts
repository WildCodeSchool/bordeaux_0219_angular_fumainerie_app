import { Time } from '@angular/common';
import { User } from './user';
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
  public user?: User;


  constructor(input: Event) {
      Object.assign(this, input);
  }
}
