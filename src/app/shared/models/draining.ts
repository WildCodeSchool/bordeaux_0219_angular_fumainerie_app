export class Draining {
  public date: string;
  public heure: string;
  public userId: number;
  public createAt: string;
  public deleteAt: string;
  public status: string;

  constructor(input: Draining) {
    Object.assign(this, input);
  }
}
