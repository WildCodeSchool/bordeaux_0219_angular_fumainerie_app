export class Question {
    public id!: number;
    public createAt!: string;
    public topic!: string;
    public question!: string;
    public traited!: boolean;
    public user_id!: number;
    public username!: string;
    public avatar!: string;
    public function!: string;
    constructor(input: Question) {
        Object.assign(this, input);
    }
  }
