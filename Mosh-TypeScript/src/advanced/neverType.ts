function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  while (true) {
    //read a message from a queue
  }
}
reject("...");
//console.log("Hello World");
