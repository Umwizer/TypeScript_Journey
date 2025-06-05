abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}
//abstract methods can only appear within an abstract class.
class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("Rendering a circle");
  }
}
