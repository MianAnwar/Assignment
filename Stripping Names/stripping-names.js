"use strict";
exports.__esModule = true;
var StrippingName = /** @class */ (function () {
    function StrippingName() {
        this.name = "\t\n\t Albert Einstein \t\n\t";
    }
    StrippingName.prototype.getName = function () {
        return this.name;
    };
    return StrippingName;
}());
exports["default"] = StrippingName;
var strippingName = new StrippingName();
console.log("-------------------------------");
console.log(strippingName.getName());
console.log("-------------------------------");
console.log(strippingName.getName().trim());
console.log("-------------------------------");
