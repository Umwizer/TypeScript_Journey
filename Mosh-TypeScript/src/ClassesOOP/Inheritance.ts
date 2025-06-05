class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  Walk() {
    console.log("Walking");
  }
}
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    console.log("Taking Test");
  }
}
// let student = new Student(1, "John", "john@gmail.com");
// student.takeTest;
// Getters (get) and methods like Walk() should not be defined inside the constructor. They should be class-level methods, outside the constructor

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}
let teacher = new Teacher("Ruth", "Umwizerwa");
console.log(teacher.fullName);

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}
//polymorphism
printNames([
  new Student(1, "Kellia", "Iradukunda"),
  new Teacher("Ruth", "Umwizerwa"),
  new Principal("Prince", "Ishimwe"),
]);
function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}
