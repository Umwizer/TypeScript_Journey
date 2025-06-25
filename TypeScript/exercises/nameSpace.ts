namespace Utilities {
  export function log(message: string) {
    console.log("Log", message);
  }
  export function error(message: string) {
    console.error("Error:", message);
  }
}
Utilities.log("This is message");
Utilities.error("This is an error");
