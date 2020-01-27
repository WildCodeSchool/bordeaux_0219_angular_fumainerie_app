export class Document {
  public id: number;
  public title: string;
  public description: string;
  public createAt: string;
  public link: string;

  constructor(input?: Document) {
    if (input) {
      Object.assign(this, input);
    }
  }
}

