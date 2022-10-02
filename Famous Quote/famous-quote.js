"use strict";
exports.__esModule = true;
var FamousQuote = /** @class */ (function () {
    function FamousQuote() {
        this.famous_person = "Albert Einstein";
        this.message = "A person who never made a mistake never tried anything new.";
    }
    FamousQuote.prototype.returnFormattedQuote = function () {
        return this.famous_person + ' once said, \"' + this.message + '\"';
    };
    return FamousQuote;
}());
exports["default"] = FamousQuote;
var famousQuote = new FamousQuote();
console.log(famousQuote.returnFormattedQuote());
