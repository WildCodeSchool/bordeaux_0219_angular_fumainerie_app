export class GouvernancePersonality {
  public id: number;
  public name: string;
  public picture: string;
  public details: string;
  public citation: string;

  constructor(input?: GouvernancePersonality) {
    Object.assign(this, input);
  }
}
