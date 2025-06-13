var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getSSN = function () {
        return this.ssn;
    };
    return Person;
}());
var person = new Person("153-07-3130", "Ruth", "Umwizerwa");
console.log(person.getFullName());
console.log(person.getSSN());
