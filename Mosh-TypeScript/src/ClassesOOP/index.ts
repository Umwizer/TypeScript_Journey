class Account {
  readonly id: number; //readonly
  owner: string;
  balance: number;
  nickName?: string; //readonly properties

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

let account = new Account(1, "Ruth", 0);

account.deposit(100);
console.log(typeof account);
console.log(account instanceof Account);

//Union
//if(typeof someOn=bj === 'number)
