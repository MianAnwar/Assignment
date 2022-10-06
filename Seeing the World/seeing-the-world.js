"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var WorldList = /** @class */ (function () {
    function WorldList() {
    }
    WorldList.PrintOriginalList = function () {
        this.places.forEach(function (place) {
            console.log(place);
        });
    };
    WorldList.PrintSortedASC = function () {
        console.log("\n\t\tSorted");
        __spreadArray([], this.places, true).sort(function (x, y) { return x.localeCompare(y); })
            .forEach(function (place) {
            console.log(place);
        });
    };
    WorldList.PrintSortedDSC = function () {
        console.log("\n\t\tSorted");
        __spreadArray([], this.places, true).sort(function (x, y) { return y.localeCompare(x); })
            .forEach(function (place) {
            console.log(place);
        });
    };
    //    • Store the locations in a array. Make sure the array is not in alphabetical order.
    WorldList.places = [
        "Dubai 1",
        "Switzerland 2",
        "Belgium 3",
        "Saudia 4",
        "Europe 5",
    ];
    return WorldList;
}());
exports["default"] = WorldList;
console.log(" \n\t\t• Print your array in its original order.");
WorldList.PrintOriginalList();
console.log("-----------------------------");
console.log("\n\t\t• Print your array in alphabetical order without modifying the actual list.");
WorldList.PrintSortedASC();
console.log("-----------------------------");
console.log("\n\t\t• Print your array in reverse alphabetical order without changing the order of the original list.");
WorldList.PrintSortedDSC();
console.log("-----------------------------");
console.log("\n\t\t• Show that your array is still in its original order by printing it.");
WorldList.PrintOriginalList();
console.log("-----------------------------");
console.log("\n\t\t• Reverse the order of your list. Print the array to show that its order has changed.");
WorldList.places
    .sort(function (x, y) { return x.localeCompare(y); })
    .forEach(function (place) {
    console.log(place);
});
console.log("-----------------------------");
console.log("\n\t\t• Reverse the order of your list again. Print the list to show it’s back to its original order.");
WorldList.places
    .sort(function (x, y) { return x.localeCompare(y); })
    .forEach(function (place) {
    console.log(place);
});
console.log("-----------------------------");
console.log("\n\t\t• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.");
WorldList.places
    .sort(function (x, y) { return x.localeCompare(y); })
    .forEach(function (place) {
    console.log(place);
});
console.log("-----------------------------");
console.log("\n\t\t• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.");
WorldList.places
    .sort(function (x, y) { return x.localeCompare(y); })
    .forEach(function (place) {
    console.log(place);
});
console.log("-----------------------------");
