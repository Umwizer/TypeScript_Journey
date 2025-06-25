interface Identifiable {
  id: number;
}
function findById<T extends Identifiable>(
  items: T[],
  id: number
): T | undefined {
  for (const item of items) {
    if (item.id === id) {
      return item;
    }
  }
  return undefined;
}
const people43 = [
  { id: 1, name: "ruth" },
  { id: 2, name: "Alice" },
];
const pers = findById(people43, 2);
console.log(pers?.name);
