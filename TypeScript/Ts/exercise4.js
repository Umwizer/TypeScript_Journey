"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persons = void 0;
exports.isAdmin = isAdmin;
exports.isUser = isUser;
exports.logPerson = logPerson;
exports.persons = [
    {
        type: "user",
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
    { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
    { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
];
// ✅ Use type predicate
function isAdmin(person) {
    return person.type === "admin";
}
// ✅ Use type predicate
function isUser(person) {
    return person.type === "user";
}
function logPerson(person) {
    var additionalInformation = "";
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    else if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
console.log("Admins:");
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log("Users:");
exports.persons.filter(isUser).forEach(logPerson);
// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
