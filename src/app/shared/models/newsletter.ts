import { User } from './user';

export class Newsletter {

  public id!: number;
  public email!: string;
  public user?: User;


  constructor(input: Newsletter) {
    Object.assign(this, input);
  }
}
