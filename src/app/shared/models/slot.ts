import { User } from './user';

export class Slot {
public id?: number;
public startAt?: string;
public endAt?: string;
public name?: string;
public user?: User;

constructor(input: Slot) {
  Object.assign(this, input);
}
}
