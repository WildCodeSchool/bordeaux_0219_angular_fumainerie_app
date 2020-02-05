import { User } from './user';

export class Partner {
  name: string;
  img: string;
  public user?: User;


  constructor(input?: Partner) {
    Object.assign(this, input);
  }
}
