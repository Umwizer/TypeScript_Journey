class Persons {
  constructor(public name: string) {}
}
class Customers extends Person {}
function echo<T extends Persons>(value: T): T {
  return value;
}
echo(new Persons("a"));
