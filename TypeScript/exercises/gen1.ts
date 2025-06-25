//with function
function reneOne<T>(arr: T): T {
  return arr;
}
//console.log(ruthOne(["a", "b", "c"]));
console.log(reneOne([1, 2, 3]));
console.log(reneOne({ age: 20 }));
console.log(reneOne(true));

//with interface
interface empl<T, U> {
  id: T;
  address: U;
}
let emp8: empl<number, string> = {
  id: 123,
  address: "Bav1 Mumbai",
};

//with class

class Container3<T> {
  value: T;
  constructor(val: T) {
    this.value = val;
  }
  getValue3(): T {
    return this.value;
  }
}
const container = new Container3({ age: 29 });
console.log(container);
