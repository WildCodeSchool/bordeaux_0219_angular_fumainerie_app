export class Slot {
public id?: number;
public startAt?: string;
public endAt?: string;
public name?: string;

constructor(input: Slot) {
  Object.assign(this, input);
}
}
