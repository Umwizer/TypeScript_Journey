interface Product {
  namess: string;
  price: number;
}
class Store<T> {
  objects: T[] = [];

  add(obj: T): void {
    this.objects.push(obj);
  }
}
let store = new Store<Product>();
store.objects = [];
