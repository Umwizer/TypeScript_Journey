class keyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}
let pair = new keyValuePair("1", "a");
pair.value["8"];
