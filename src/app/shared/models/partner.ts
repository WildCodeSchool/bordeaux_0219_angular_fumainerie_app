export class Partner {
  name: string;
  img: string;

  constructor(input?: Partner) {
    Object.assign(this, input);
  }
}
