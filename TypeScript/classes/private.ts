class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  getSSN(): string {
    return this.ssn;
  }
}
let person = new Person("153-07-3130", "Ruth", "Umwizerwa");

console.log(person.getFullName());
console.log(person.getSSN());
