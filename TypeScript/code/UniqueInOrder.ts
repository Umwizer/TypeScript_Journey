// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// export function uniqueInOrder(
//   iterable: string | (string | number)[]
// ): (string | number)[] {
//   return [...iterable].filter(
//     (element, index) => element !== iterable[index - 1]
//   );
// }
//uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"]);
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

export function uniqueInOrder(
  iterable: string | (string | number)[]
): (string | number)[] {
  const items = typeof iterable === "string" ? iterable.split("") : iterable;
  return items.filter((element, index) => element !== items[index - 1]);
}
