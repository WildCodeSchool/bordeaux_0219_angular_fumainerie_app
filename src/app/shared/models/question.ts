export class Question {
    public id!: number;
    public createAt!: string;
    public topic!: string;
    public question!: string;
    public traited!: boolean;
    public user_id!: number;
    public firstname!: string;
    public lastname!: string;
    public email!: string;


    constructor(input?: Question) {
        Object.assign(this, input);
    }
  }
