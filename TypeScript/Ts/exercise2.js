"use strict";
/*

Intro:

    All 2 users liked the idea of the community. We should go
    forward and introduce some order. We are in Germany after all.
    Let's add a couple of admins.

    Initially, we only had users in the in-memory database. After
    introducing Admins, we need to fix the types so that
    everything works well together.

Exercise:

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.persons = void 0;
exports.logPerson = logPerson;
exports.persons = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator",
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut",
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "World saver",
    },
];
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat("role" in person ? person.role : person.occupation));
}
exports.persons.forEach(logPerson);
