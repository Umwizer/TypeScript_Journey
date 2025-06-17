function Component(constructor: Function) {
  console.log("Componentdecorator called ");
  constructor.prototype;
}
@Component
class ProfileComponent {}
