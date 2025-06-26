class Logger {
  static logs: { timestamp: number; message: string }[] = [];

  addLog(message: string) {
    Logger.logs.push({ timestamp: Date.now(), message });
  }

  static clearLogs() {
    this.logs = [];
  }
}
const logger1 = new Logger();
const logger2 = new Logger();

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

function genArray<T>(arg: T): T[] {
  return [arg];
}
console.log(genArray<string>("ruth"));

//Third exercise
// Type the user object and ensure proper autocompletion
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}
const user: User = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};
function printUserInfo(u: User) {
  console.log(`${u.name} (${u.age}) - Admin: ${u.isAdmin}`);
}

printUserInfo(user);

//exercise 4
// Create a union type Shape and implement the getArea
// function using type guards
interface Circle {
  radius: number;
  kind: "circle";
}
interface Rectangle {
  length: number;
  width: number;
  kind: "rectangle";
}
type Shape = Circle | Rectangle;
// define Circle and Rectangle

function getArea(shape: Shape): number {
  // Use type guards to return correct area
  if ("radius" in shape) {
    return shape.radius * shape.radius * Math.PI;
  } else {
    return shape.length * shape.width;
  }
}
console.log(getArea({ kind: "circle", radius: 10 }));
console.log(getArea({ kind: "rectangle", width: 4, length: 5 }));

//exercise 5
// Update the function to accept a tuple
//  and destructure it correctly
function greet([firstName, lastName]: [string, string]) {
  return `Hello, ${firstName} ${lastName}`;
}

// TEST CASE:
console.log(greet(["Jane", "Doe"]));

//exercise 6
// Fix typing issues and preserve return type inference
const makeAdder = (x: number) => {
  return (y: number) => x + y;
};

const add5 = makeAdder(5);
const result = add5(10); // should be number

//exercise 7
// Write a function isDefined that acts as a type guard
function isDefined<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null;
}
const list = [1, 2, null, 4, undefined];
const filterd = list.filter(isDefined);
console.log(filterd);
//exercise 8
// Type this function to ensure name
// is required and age is optional
interface Per {
  name: string;
  age?: number;
}
function describePerson(person: Per): string {
  const agePart = person.age ? ` who is ${person.age} years old` : "";
  return `${person.name}${agePart}`;
}
// const case2 = describePerson({ name: "Ruth" });
// console.log(case2);
const test3 = describePerson({ name: "Ruth", age: 25 });
console.log(test3);

//exercise 9
// Create a mapped type ReadonlyPartial<T>
// that makes all properties both optional
// and readonly type ReadonlyPartial<T> = implement
type ReadonlyPartial<T> = {
  readonly [k in keyof T]?: T[k];
};
type Userss = {
  id: number;
  name: string;
};

const user3: ReadonlyPartial<Userss> = {
  id: 1,
};
//user3.id = 2;

//10
/// Write a TypeScript function processValue
//  that takes string | number | boolean | null |
// undefined, uses type guards to log uppercase
// strings, numbers fixed to two decimals,
// and boolean as "True"/"False,” and throws an
// error for null or undefined, including a type assertion to narrow the type.
