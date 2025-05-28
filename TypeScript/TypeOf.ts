//benefits of Typescript
//challenges:
// -give the screen's innerHTML a string
// - change the two input valur to numbers

const button = document.querySelector(".button") as HTMLInputElement;
const firstInput = document.querySelector("#first-input") as HTMLInputElement;
const secondInput = document.querySelector("#second-input") as HTMLInputElement;
export const screen = document.querySelector(".screen") as HTMLInputElement;

// function addNumbers(a, b) {
//   if (typeof a == "number" && typeof b === "number") {
//     screen.innerHTML = a + b;
//   } else screen.InnerHTML = parseInt(a) + parseInt(b);
// }
function addNumbers(a: number, b: number) {
  screen.innerHTML = (a + b).toString();
}
button.addEventListener("click", () =>
  addNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
);
