var Utilities;
(function (Utilities) {
    function log(message) {
        console.log("Log", message);
    }
    Utilities.log = log;
    function error(message) {
        console.error("Error:", message);
    }
    Utilities.error = error;
})(Utilities || (Utilities = {}));
Utilities.log("This is message");
Utilities.error("This is an error");
