export class ModalFormat {
  public title: string;
  public description: string;
  public deleteButton: boolean;

  constructor(input: ModalFormat) {
    Object.assign(this, input);
}
}
