import { User } from './user';

export class Document {
  public id: number;
  public title: string;
  public description: string;
  public createAt: string;
  public link: string;
  public user?: User;
  public status: boolean;


  constructor(input?: Document) {
    if (input) {
      Object.assign(this, input);
    }
  }
}

