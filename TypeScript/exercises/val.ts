class Counter {
  static count = 0;

  increment() {
    Counter.count++;
  }

  static getCount() {
    return this.count;
  }
}
