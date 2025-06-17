//Decorator factory
function Component(value: number) {
  return (constructor: Function) => {
    console.log("Component decorator called ");
    constructor.prototype.options = value;
    constructor.prototype.UniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the Dom");
    };
  };
}
@Component(1)
class ProfileComponent {}
