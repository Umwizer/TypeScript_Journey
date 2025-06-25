function findById(items, id) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (item.id === id) {
            return item;
        }
    }
    return undefined;
}
var people43 = [
    { id: 1, name: "ruth" },
    { id: 2, name: "Alice" },
];
var pers = findById(people43, 2);
console.log(pers === null || pers === void 0 ? void 0 : pers.name);
