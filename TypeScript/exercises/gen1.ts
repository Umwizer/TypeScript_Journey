function ruthOne<T>(arr: Array<T>): T {
  return arr[0];
}
function reneOne<T>(arr: T[]): T {
  return arr[arr.length - 1];
}
console.log(ruthOne(["a", "b", "c"]));
console.log(reneOne([1, 2, 3]));
