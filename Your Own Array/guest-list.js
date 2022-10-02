"use strict";
exports.__esModule = true;
var GuestList = /** @class */ (function () {
    function GuestList() {
    }
    GuestList.guests = [
        "Bilal", "Ahsan", "Umair"
    ];
    return GuestList;
}());
exports["default"] = GuestList;
GuestList.guests.forEach(function (guest) {
    console.log("Hi ".concat(guest, "! please have a dinner tomorrow with us."));
});
console.log("\n\t ".concat(GuestList.guests[2], " can't come to dinner."));
GuestList.guests[2] = "Akram";
console.log("\n\t New Invitation | Guest Replaced");
GuestList.guests.forEach(function (guest) {
    console.log("Hi ".concat(guest, "! please have a dinner tomorrow with us."));
});
console.log("\n\t A bigger dinner table found.");
GuestList.guests.push("Umer", "Zain", "Anas");
console.log("\n\t New Invitation | 3-more guests added.");
GuestList.guests.forEach(function (guest) {
    console.log("Hi ".concat(guest, "! please have a dinner tomorrow with us."));
});
GuestList.guests.unshift("Hassan");
console.log("\n\t New Invitation | Guest added at the biginnning");
GuestList.guests.forEach(function (guest) {
    console.log("Hi ".concat(guest, "! please have a dinner tomorrow with us."));
});
GuestList.guests.push("Nisar");
console.log("\n\t New Invitation | Guest added at the end");
GuestList.guests.forEach(function (guest) {
    console.log("Hi ".concat(guest, "! please have a dinner tomorrow with us."));
});
console.log("\n\t I can invite only two people for dinner");
GuestList.guests = GuestList.guests.slice(0, 2);
console.log("\n\t New Invitation | only first 2 guests");
GuestList.guests.forEach(function (guest) {
    console.log("Hi ".concat(guest, "! please have a dinner tomorrow with us."));
});
console.log("\n\t Remove last 2 guests");
GuestList.guests.pop();
GuestList.guests.pop();
console.log(GuestList.guests.length === 0 ? 'No Guests' : "-something went wrong-");
