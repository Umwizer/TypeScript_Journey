"use strict";
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        console.log("This will run forever...");
    }
}
