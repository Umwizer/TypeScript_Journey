type ComponentOptions = {
  selector: string;
};

//Decorator factory
function Component(value: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called ");
    constructor.prototype.options = value;
    constructor.prototype.UniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the Dom");
    };
  };
}
function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.Pipe = true;
}
@Component({ selector: "my-profile" })
@Pipe
class ProfileComponent {}
