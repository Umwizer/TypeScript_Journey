function Component(constructor: Function) {
  console.log("Component decorator called ");
  constructor.prototype.UniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the Dom");
  };
}
@Component
class ProfileComponent {}
