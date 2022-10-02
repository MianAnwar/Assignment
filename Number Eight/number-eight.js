"use strict";
exports.__esModule = true;
var NumberEight = /** @class */ (function () {
    function NumberEight() {
    }
    NumberEight.prototype.addtion = function () {
        console.log(5 + 3);
    };
    NumberEight.prototype.subtraction = function () {
        console.log(10 - 2);
    };
    NumberEight.prototype.multiplication = function () {
        console.log(4 * 2);
    };
    NumberEight.prototype.division = function () {
        console.log(16 / 2);
    };
    return NumberEight;
}());
exports["default"] = NumberEight;
var calculation = new NumberEight();
calculation.addtion();
calculation.subtraction();
calculation.multiplication();
calculation.division();
