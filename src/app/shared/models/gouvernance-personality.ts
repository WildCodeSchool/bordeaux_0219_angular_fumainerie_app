export class GouvernancePersonality {
  public id: number;
  public name: string;
  public picture: string;
  public details: string;

  constructor(input?: GouvernancePersonality) {
    Object.assign(this, input);
  }
}
