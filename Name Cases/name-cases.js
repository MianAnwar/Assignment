"use strict";
exports.__esModule = true;
var NameCases = /** @class */ (function () {
    function NameCases() {
        this.userName = "Mian Muhammad Anwar";
    }
    NameCases.prototype.toTitleCase = function () {
        return this.userName.toLowerCase().split(' ').map(function (word) {
            return word.replace(word[0], word[0].toUpperCase());
        }).join(' ');
    };
    return NameCases;
}());
exports["default"] = NameCases;
var nameCases = new NameCases();
console.log(nameCases.userName.toLowerCase());
console.log(nameCases.userName.toUpperCase());
console.log(nameCases.toTitleCase());
