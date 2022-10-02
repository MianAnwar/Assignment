"use strict";
/*
  Mian Muhammad Anwar, 02-10-2022
  Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
*/
exports.__esModule = true;
var NamesList = /** @class */ (function () {
    function NamesList() {
    }
    NamesList.names = [
        "Ali", "Zubair", "Sufran", "Kabir"
    ];
    return NamesList;
}());
exports["default"] = NamesList;
console.log(NamesList.names[0]);
console.log(NamesList.names[1]);
console.log(NamesList.names[2]);
console.log(NamesList.names[3]);
NamesList.names.forEach(function (name) {
    console.log("Hi ".concat(name, "! Welcome to my program."));
});
