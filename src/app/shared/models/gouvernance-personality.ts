import { User } from './user';

export class GouvernancePersonality {
  public id: number;
  public name: string;
  public picture: string;
  public details: string;
  public citation: string;
  public user?: User;


  constructor(input?: GouvernancePersonality) {
    Object.assign(this, input);
  }
}
