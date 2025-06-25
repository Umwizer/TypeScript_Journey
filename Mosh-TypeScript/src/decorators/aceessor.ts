function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  //const original = descriptor.value;
}

class Person2 {
  constructor(public firstName: string, public lastName: string) {}
  @Capitalize
  get FullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
//as const
//difference btn omit and exclude
