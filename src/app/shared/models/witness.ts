import { User } from './user';

export class Witness {
  public id: number;
  public note?: number;
  public title?: string;
  public status?: any;
  public description?: string;
  public user_id?: number;
  public user?: User;


  constructor(input: Witness) {
      Object.assign(this, input);
  }
}

