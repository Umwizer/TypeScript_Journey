class Account {
  // readonly id: number; //readonly
  // owner: string;
  //balance: number;
  nickName?: string; //readonly properties

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number //Parameter Properties
  ) {
    // this.id = id;
    //this.owner = owner;
    //this.balance = balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
  //get method
  get balance(): number {
    return this._balance;
  }
  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }
}

let account = new Account(1, "Ruth", 0);

account.deposit(100);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.balance);
//account.balance = 1; we can't assign to balance it's the readonly

//Union
//if(typeof someOn=bj === 'number)
