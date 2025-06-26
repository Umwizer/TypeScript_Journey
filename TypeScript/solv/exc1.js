var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.addLog = function (message) {
        Logger.logs.push({ timestamp: Date.now(), message: message });
    };
    Logger.clearLogs = function () {
        this.logs = [];
    };
    Logger.logs = [];
    return Logger;
}());
var logger1 = new Logger();
var logger2 = new Logger();
logger1.addLog("First log");
logger2.addLog("Second log");
console.log(Logger.logs);
//seconde exercise
// Create a generic function wrapInArray that
// returns an array containing the input value,
//  maintaining its type.
// Usage:
// const resultss = wrapInArra(42); // number[]
// const results = wrapInArra("hello"); // string[]
function genArray(arg) {
    return [arg];
}
console.log(genArray("ruth"));
var user = {
    name: "Alice",
    age: 30,
    isAdmin: false,
};
function printUserInfo(u) {
    console.log("".concat(u.name, " (").concat(u.age, ") - Admin: ").concat(u.isAdmin));
}
printUserInfo(user);
// define Circle and Rectangle
function getArea(shape) {
    // Use type guards to return correct area
    if ("radius" in shape) {
        return shape.radius * shape.radius * Math.PI;
    }
    else {
        return shape.length * shape.width;
    }
}
console.log(getArea({ kind: "circle", radius: 10 }));
console.log(getArea({ kind: "rectangle", width: 4, length: 5 }));
//exercise 5
// Update the function to accept a tuple
//  and destructure it correctly
function greet(_a) {
    var firstName = _a[0], lastName = _a[1];
    return "Hello, ".concat(firstName, " ").concat(lastName);
}
// TEST CASE:
greet(["Jane", "Doe"]);
//exercise 6
// Fix typing issues and preserve return type inference
var makeAdder = function (x) {
    return function (y) { return x + y; };
};
var add5 = makeAdder(5);
var result = add5(10); // should be number
//exercise 7
// Write a function isDefined that acts as a type guard
function isDefined(value) {
    return value !== undefined && value !== null;
}
var list = [1, 2, null, 4, undefined];
var filterd = list.filter(isDefined);
console.log(filterd);
function describePerson(person) {
    var agePart = person.age ? " who is ".concat(person.age, " years old") : "";
    return "".concat(person.name).concat(agePart);
}
var case2 = describePerson({ name: "Ruth" });
console.log(case2);
var test3 = describePerson({ name: "Ruth", age: 25 });
console.log(test3);
