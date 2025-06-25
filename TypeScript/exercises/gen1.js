//with function
function reneOne(arr) {
    return arr;
}
//console.log(ruthOne(["a", "b", "c"]));
console.log(reneOne([1, 2, 3]));
console.log(reneOne({ age: 20 }));
console.log(reneOne(true));
var emp8 = {
    id: 123,
    address: "Bav1 Mumbai",
};
//with class
var Container3 = /** @class */ (function () {
    function Container3(val) {
        this.value = val;
    }
    Container3.prototype.getValue3 = function () {
        return this.value;
    };
    return Container3;
}());
var container = new Container3({ age: 29 });
console.log(container);
