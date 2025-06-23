function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (message: string) {
    console.log("Before");
    original.call(this, message);
    console.log("After");
  };
}
class Person1 {
  @Log
  say(message: string) {
    console.log("Person says" + message);
  }
}
let person = new Person1();
person.say("Hello");
