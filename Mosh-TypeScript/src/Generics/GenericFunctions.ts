class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
let utils = new ArrayUtils();
let number = ArrayUtils.wrapInArray(1);
