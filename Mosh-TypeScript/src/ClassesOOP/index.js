var Account = /** @class */ (function () {
    function Account(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    };
    return Account;
}());
