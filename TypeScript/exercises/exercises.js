// Create a function greet that takes a name
// (string) and age (number), and returns
//  a string like:
// "Hello, my name is Alice and I am 25 years old."
function greet(name, age) {
    return "Hello, my name is ".concat(name, " and I am ").concat(age, " years old");
}
console.log(greet("Alice", 25));
